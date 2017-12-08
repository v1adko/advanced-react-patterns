import React from 'react';
import Toggle from './Toggle';

function App() {
  return (
    <Toggle
      onToggle={on => console.log('toggle', on)}
    />
  )
}

export default App;
