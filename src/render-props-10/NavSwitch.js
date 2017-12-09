import React from 'react';
import Switch from './internal/Switch';
import { ConnectedToggle } from './Toggle';

function NavSwitch() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <div>
        <ConnectedToggle
          render={toggle => (toggle.on ? '🦄' : 'Enable Emoji')}
        />
      </div>
      <ConnectedToggle
        render={toggle => (
          <Switch
            {...toggle.getTogglerProps({
              on: toggle.on
            })}
          />
        )}
      />
    </div>
  );
}

export default NavSwitch;
