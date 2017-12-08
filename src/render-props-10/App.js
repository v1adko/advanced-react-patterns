import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';

function App() {
  return (
    <Toggle
      onToggle={on => console.log('toggle', on)}
      render={({ on, toggle }) => (
        <div>
          <Switch on={on} onClick={toggle} />
          {on ? 'on' : 'off'}
        </div>
      )}
    />
  );
}

export default App;
