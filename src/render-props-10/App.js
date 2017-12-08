import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';

function App() {
  return (
    <Toggle
      onToggle={on => console.log('toggle', on)}
      render={({ on, toggle, togglerProps }) => (
        <div>
          <Switch on={on} {...togglerProps} />
          {on ? 'on' : 'off'}
          <hr />
          <button {...togglerProps}>{on ? 'on' : 'off'}</button>
        </div>
      )}
    />
  );
}

export default App;
