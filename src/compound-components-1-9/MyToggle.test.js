import React from 'react';
import ReactDOM from 'react-dom';
import MyToggleWrapper from './MyToggle';

describe('<MyToggle />', () => {
  // TODO: Use react-test-utils or enzyme
  it('renders correctly', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const toggle = () => (toggle.called = true);
    ReactDOM.render(
      <MyToggleWrapper.WrappedComponent toggle={{ on: true, toggle }} />,
      div
    );
    if (!div.innerHTML.includes('on')) {
      throw new Error(`Contents are wrong: ${div.innerHTML}`);
    }
    const button = div.getElementsByTagName('button')[0];
    button.click();
    if (!toggle.called) {
      throw new Error('toggle not called!');
    }
  });
});
