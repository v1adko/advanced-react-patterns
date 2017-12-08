import React from 'react';
import { withToggle } from './Toggle';

const ToggleMessage = ({ toggle: { on }, message }) =>
  on ? message || 'The button is toggled on' : null;

class MyToggle extends React.Component {
  static ToggleMessage = withToggle(ToggleMessage);

  focus = () => this.button.focus();

  render() {
    const { toggle: { on, toggle } } = this.props;
    return (
      <button
        style={{
          width: '20px'
        }}
        onClick={toggle}
        ref={button => (this.button = button)}
      >
        {on ? 'on' : 'off'}
      </button>
    );
  }
}

export default withToggle(MyToggle);
