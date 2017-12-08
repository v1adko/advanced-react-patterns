import React from 'react';
import PropTypes from 'prop-types';
// #9 to handle statics with HOCs properly
import hoistNonReactStatics from 'hoist-non-react-statics';
import Switch from './Switch';

const TOGGLE_CONTEXT = '__toggle__';

// #4 HOC
export function withToggle(Component) {
  function Wrapper({ innerRef, ...props }, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return (
      <Component
        // #7 To allow ref props with HOCs
        ref={innerRef}
        // Avoids #5 prop namespace clash
        toggle={toggleContext}
        {...props}
      />
    );
  }

  // #6 For ReactDevTools extension
  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;

  // #8 For easier HOC testing
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  };

  Wrapper.WrappedComponent = Component;

  return hoistNonReactStatics(Wrapper, Component);
}

const ToggleOn = ({ children, toggle: { on } }) => {
  return on ? children : null;
};

const ToggleOff = ({ children, toggle: { on } }) => {
  return on ? null : children;
};

const ToggleButton = ({ toggle: { on, toggle }, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />;
};

// #1 Compound components
class Toggle extends React.Component {
  // For #4 Better HOC debugging
  static ON = withToggle(ToggleOn);
  static OFF = withToggle(ToggleOff);
  static Button = withToggle(ToggleButton);
  static defaultProps = { onToggle: () => {} };
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  };

  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    };
  }

  render() {
    return this.props.children;
  }
}

export default Toggle;
