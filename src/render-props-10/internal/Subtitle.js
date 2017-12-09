import React from 'react';
import { ConnectedToggle } from '../Toggle';

function Subtitle() {
  return (
    <ConnectedToggle
      render={toggle =>
        toggle.on ? (
          '👩‍🏫 👉 🕶'
        ) : (
          <span>
            <a href="https://kcd.im">Kent C. Dodds</a> is awesome
          </span>
        )
      }
    />
  );
}

export default Subtitle;
