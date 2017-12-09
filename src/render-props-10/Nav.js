import React from 'react';

import { ConnectedToggle } from './Toggle';

function StyledLink({ toggle, link, emoji, text }) {
  const style = toggle.on
    ? {
        textDecoration: 'none'
      }
    : {};
  return (
    <a style={style} href={link}>
      {toggle.on ? emoji : text}
    </a>
  );
}

function Nav() {
  return (
    <ConnectedToggle
      render={toggle => (
        <nav style={{ flex: 1 }}>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              listStyle: 'none',
              paddingLeft: '0'
            }}
          >
            <li>
              <StyledLink
                link="index.html"
                toggle={toggle}
                emoji="🏡"
                text="Home"
              />
            </li>
            <li>
              <StyledLink
                link="/about/"
                toggle={toggle}
                emoji="❓"
                text="About"
              />
            </li>
            <li>
              <StyledLink
                link="/blog/"
                toggle={toggle}
                emoji="📖"
                text="Blog"
              />
            </li>
          </ul>
        </nav>
      )}
    />
  );
}

export default Nav;
