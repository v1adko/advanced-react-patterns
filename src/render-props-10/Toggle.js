import React from 'react';
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

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  reset = () => {
    this.setState(this.initialState, () => {
      this.props.onReset(this.state.on);
    });
  };

  // #11 Prop collections + #12 Prop getters
  getTogglerProps = ({ onClick, ...props } = {}) => {
    return {
      'aria-expanded': this.state.on,
      onClick: compose(onClick, this.toggle),
      ...props
    };
  };

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
      getTogglerProps: this.getTogglerProps
    });
  }
}

export default Toggle;
