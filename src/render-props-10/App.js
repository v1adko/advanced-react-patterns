import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';
import MyUpperCaseInput from './MyUpperCaseInput';

class App extends React.Component {
  initialState = { timesClicked: 0, on: false };
  state = this.initialState;

  handleToggle = () => {
    this.setState(({ timesClicked, on }) => ({
      thimesClicked: timesClicked + 1,
      on: timesClicked >= 4 ? false : !on
    }));
  };

  handleReset;

  render() {
    const { timesClicked, on } = this.state;
    return [
      <Toggle
        key={'render-props'}
        defaultOn={true}
        onToggle={on => console.log('toggle', on)}
        onReset={on => console.log('reset', on)}
        render={toggle => (
          <div>
            <Switch
              {...toggle.getTogglerProps({
                on: toggle.on
              })}
            />
            {toggle.on ? 'on' : 'off'}
            <br />
            <button
              {...toggle.getTogglerProps({
                onClick: () => alert('hi')
              })}
            >
              {toggle.on ? 'on' : 'off'}
            </button>
            <br />
            <button onClick={() => toggle.reset()}>Reset</button>
          </div>
        )}
      />,
      <hr key="separator-1" />,
      /* 14 Controlled component -example */
      <MyUpperCaseInput key="controlled-component-example" />,
      <hr key="separator-2" />,
      /* 14 Control props in contro */
      <Toggle
        key="controlled-component-props"
        on={on}
        onToggle={this.handleToggle}
        onReset={this.handleReset}
        render={toggle => (
          <div>
            <Switch
              {...toggle.getTogglerProps({
                on: toggle.on
              })}
            />
            {timesClicked > 4 ? (
              <div>
                Whoa, you've clicked too much!
                <br />
                <button onClick={toggle.reset}>reset</button>
              </div>
            ) : timesClicked > 0 ? (
              <div>Click count: {timesClicked}</div>
            ) : null}
          </div>
        )}
      />
    ];
  }
}

export default App;
