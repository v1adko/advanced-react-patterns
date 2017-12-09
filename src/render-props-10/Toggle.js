import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import ToggleProvider from './ToggleProvider';
import compose from './utils/compose';

class Toggle extends React.Component {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {}
  };
  // #13 Component State Initializers
  initialState = { on: this.props.defaultOn };
  state = this.initialState;

  toggle = () => {
    if (this.isOnControlled()) {
      this.props.onToggle(!this.props.on);
    } else {
      this.setState(
        ({ on }) => ({ on: !on }),
        () => {
          this.props.onToggle(this.state.on);
        }
      );
    }
  };

  reset = () => {
    if (this.isOnControlled()) {
      this.props.onReset(!this.props.on);
    } else {
      this.setState(this.initialState, () => {
        this.props.onReset(this.state.on);
      });
    }
  };

  // #11 Prop collections + #12 Prop getters
  getTogglerProps = ({ onClick, ...props } = {}) => {
    const on = this.isOnControlled() ? this.props.on : this.state.on;
    return {
      'aria-expanded': on,
      onClick: compose(onClick, this.toggle),
      ...props
    };
  };

  isOnControlled() {
    return this.props.on !== undefined;
  }

  render() {
    return this.props.render({
      on: this.isOnControlled() ? this.props.on : this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps
    });
  }
}

export function ConnectedToggle(props, context) {
  return props.render(context[ToggleProvider.contextName]);
}
ConnectedToggle.contextTypes = {
  [ToggleProvider.contextName]: PropTypes.object.isRequired
};

// 16 HOC with Render Props (just like in Lessons 5 - 10)
export function withToggle(Component) {
  function Wrapper(props, context) {
    const { innerRef, ...remainingProps } = props;
    return (
      <ConnectedToggle
        render={toggle => (
          <Component {...remainingProps} toggle={toggle} ref={innerRef} />
        )}
      />
    );
  }
  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;
  Wrapper.propTypes = { innerRef: PropTypes.func };
  Wrapper.WrappedComponent = Component;
  return hoistNonReactStatics(Wrapper, Component);
}

export default Toggle;
