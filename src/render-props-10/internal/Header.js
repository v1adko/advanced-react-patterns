import React from 'react';
import Nav from '../Nav';
import NavSwitch from '../NavSwitch';

function Header() {
  return (
    <div>
      <div
        style={{
          maxWidth: '400px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        <Nav />
        <NavSwitch />
      </div>
    </div>
  );
}

export default Header;
