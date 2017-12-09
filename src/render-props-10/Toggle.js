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

export default Toggle;
