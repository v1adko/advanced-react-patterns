import React from 'react';
import { withToggle } from './Toggle';

const Subtitle = ({ toggle }) =>
  toggle.on ? (
    '👩‍🏫 👉 🕶'
  ) : (
    <span>
      <a href="https://kcd.im">Kent C. Dodds</a> is awesome
    </span>
  );

export default withToggle(Subtitle);
