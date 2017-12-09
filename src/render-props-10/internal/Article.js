import React from 'react';
import { ConnectedToggle } from '../Toggle';

function Article() {
  return (
    <div>
      <ConnectedToggle
        render={toggle =>
          [
            'Once, I was on',
            toggle.on ? '🥚👩' : 'egghead.io',
            'when I',
            toggle.on ? '🤔' : 'realized',
            'something...'
          ].join(' ')
        }
      />
      <br />
      <br />
      <ConnectedToggle
        render={toggle =>
          [
            'Without',
            toggle.on ? '🙋‍♂' : 'Kent',
            `I wouldn't know Advanced React Patterns so`,
            toggle.on ? '🙏' : 'thanks',
            toggle.on ? '🙋‍♂️️' : 'Kent C. Dodds!'
          ].join(' ')
        }
      />
    </div>
  );
}

export default Article;
