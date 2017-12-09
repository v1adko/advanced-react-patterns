import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';

function App() {
  return (
    <Toggle
      defaultOn={true}
      onToggle={on => console.log('toggle', on)}
      onReset={on => console.log('reset', on)}
      render={toggle => (
        <div>
          <Switch {...toggle.getTogglerProps({
            on: toggle.on
          })} />
          {toggle.on ? 'on' : 'off'}
          <hr />
          <button
            {...toggle.getTogglerProps({
              onClick: () => alert('hi')
            })}
          >
            {toggle.on ? 'on' : 'off'}
          </button>
          <hr />
          <button onClick={() => toggle.reset()}>Reset</button>
        </div>
      )}
    />
  );
}

export default App;
