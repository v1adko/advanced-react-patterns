import React from 'react';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import { Subscriber } from 'react-broadcast';
import hoistNonReactStatics from 'hoist-non-react-statics';
import ToggleProvider from './ToggleProvider';
import compose from './utils/compose';

class Toggle extends React.Component {
  static defaultProps = {
    useRedux: false,
    defaultOn: false,
    initialState: {},
    onToggle: () => {},
    onReset: () => {},
    onUpdate: () => {},
    reducer: state => state
  };

  initialState = this.props.useRedux
    ? this.props.initialState
    : { on: this.props.defaultOn };

  state = this.initialState;

  rootReducer = (state, action) => {
    if (action.type === '__TOGGLE_RESET__') {
      return this.initialState
    }
    return this.props.reducer(state, action)
  }

  store = this.props.useRedux &&
    createStore(this.rootReducer, this.initialState);

  reset = () => {
    if (this.isStateControlled()) {
      this.props.onReset(this.initialState);
    } else if (this.props.useRedux) {
      this.store.dispatch({
        type: '__TOGGLE_RESET__'
      });
    } else {
      this.setState(this.initialState, () => this.props.onReset(this.state.on));
    }
  };

  componentDidMount() {
    if (this.props.useRedux) {
      this.unsubscribe = this.store.subscribe(() =>
        this.setState(this.store.getState())
      );
    }
  }

  componentWillUnmount() {
    if (this.props.useRedux) {
      this.unsubscribe();
    }
  }

  toggle = () => {
    if (this.isStateControlled()) {
      this.props.onToggle();
    } else {
      this.setState(
        ({ on }) => ({ on: !on }),
        () => this.props.onToggle(this.state.on)
      );
    }
  };
  getTogglerProps = ({ onClick, ...props } = {}) => ({
    onClick: compose(onClick, this.toggle),
    'aria-expanded': this.state.on,
    ...props
  });
  isStateControlled() {
    const source = this.props.useRedux ? this.props.state : this.props.on;
    return source !== undefined;
  }
  render() {
    let state = {};
    let on = {};
    if (this.props.useRedux) {
      state = this.isStateControlled()
        ? this.props.state
        : this.store.getState();
    } else {
      on = this.isStateControlled() ? this.props.on : this.state.on;
    }

    return this.props.render({
      on,
      state,
      getTogglerProps: this.getTogglerProps,
      toggle: this.toggle,
      reset: this.reset,
      dispatch: this.store.dispatch
    });
  }
}

export function ConnectedToggle(props, context) {
  return (
    <Subscriber channel={ToggleProvider.channel}>
      {toggle => props.render(toggle)}
    </Subscriber>
  );
}

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
