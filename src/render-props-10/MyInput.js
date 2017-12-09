import React from 'react';
import { ConnectedToggle } from './Toggle';

function MyInput() {
  return (
    <ConnectedToggle
      render={toggle => (
        <input
          placeholder="Type 'off' or 'on'"
          onChange={event => {
            if (event.target.value === 'on') {
              toggle.dispatch({
                type: 'toggle',
                value: true,
              })
            } else if (
              event.target.value === 'off'
            ) {
              toggle.dispatch({
                type: 'toggle',
                value: false,
              })
            }
            toggle.dispatch({
              type: 'input_change',
              value: event.target.value,
            })
          }}
        />
      )}
    />
  )
}

export default MyInput;
