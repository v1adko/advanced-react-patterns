import React from 'react';
import Switch from './internal/Switch';
import { ConnectedToggle } from './Toggle';

function MySwitch() {
  return (
    <ConnectedToggle
      render={toggle => (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Switch
            on={toggle.state && toggle.state.on}
            onClick={() =>
              toggle.dispatch({
                type: 'toggle',
                value: !toggle.state.on,
              })}
          />
        </div>
      )}
    />
  )
}


export default MySwitch;
