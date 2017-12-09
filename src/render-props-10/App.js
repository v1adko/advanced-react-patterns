import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';

function App() {
  return (
    <Toggle
      onToggle={on => console.log('toggle', on)}
      render={({ on, toggle, getTogglerProps }) => (
        <div>
          <Switch on={on} {...getTogglerProps()} />
          {on ? 'on' : 'off'}
          <hr />
          <button 
            {...getTogglerProps({
              onClick: () => alert('hi')
            })}
          >
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    />
  );
}

export default App;
