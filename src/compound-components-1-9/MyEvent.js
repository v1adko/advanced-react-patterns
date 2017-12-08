import React from 'react';
import { withToggle } from './Toggle';

const MyEvent = ({ toggle, on, event }) => {
  const props = { [event]: on };
  return toggle.on ? (
    <button
      style={{
        width: '100px'
      }}
      {...props}
    >
      The {event} event
    </button>
  ) : null;
};

export default withToggle(MyEvent);
