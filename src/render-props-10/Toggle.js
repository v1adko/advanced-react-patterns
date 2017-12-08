import React from 'react';

class Toggle extends React.Component {
  static defaultProps = { onToggle: () => {} };
  state = { on: false };
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      togglerProps: {
        'aria-expanded': this.state.on,
        onClick: this.toggle
      }
    });
  }
}

export default Toggle;
