import React from 'react';
import { ConnectedToggle } from './Toggle';
import Subtitle from './Subtitle';

function Title() {
  return (
    <div>
      <h1>
        <ConnectedToggle
          render={toggle => `Who is ${toggle.on ? '🕶❓' : 'awesome?'}`}
        />
      </h1>
      <Subtitle />
    </div>
  );
}

export default Title;
