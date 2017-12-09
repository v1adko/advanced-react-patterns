import React from 'react';
import { ConnectedToggle } from '../Toggle';

function StatePrinter() {
  return (
    <ConnectedToggle
      render={toggle => (
        <div style={{ width: '200px', textAlign: 'left', margin: '0 auto' }}>
          state:
          <pre>{JSON.stringify(toggle.state, null, 2)}</pre>
        </div>
      )}
    />
  );
}

export default StatePrinter;
