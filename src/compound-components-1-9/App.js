import React from 'react';
import Toggle from './Toggle';
import MyToggleWrapper from './MyToggle';
import MyEventWrapper from './MyEvent';

class App extends React.Component {
  render() {
    return (
      <Toggle onToggle={on => (on ? this.myToggle.focus() : null)}>
        <Toggle.ON>ON</Toggle.ON>
        <Toggle.OFF>OFF</Toggle.OFF>
        <div>
          <Toggle.Button />
        </div>
        <hr />
        <MyToggleWrapper innerRef={myToggle => (this.myToggle = myToggle)} />
        <MyToggleWrapper.ToggleMessage message="It's on!" />
        <MyEventWrapper event="onClick" on={e => alert(e.type)} />
      </Toggle>
    );
  }
}

export default App;
