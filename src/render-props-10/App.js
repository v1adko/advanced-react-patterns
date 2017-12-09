import React from 'react';
import Toggle from './Toggle';
import Switch from './Switch';
import MyUpperCaseInput from './MyUpperCaseInput';

class App extends React.Component {
  initialState = { timesClicked: 0, on: false };
  state = this.initialState;

  handleToggle = () => {
    this.setState(({ timesClicked, on }) => ({
      timesClicked: timesClicked + 1,
      on: timesClicked >= 4 ? false : !on
    }));
  };

  handleReset = () => {
    this.setState(this.initialState);
  };

  renderLinks = () => (
    <div>
      <h4>
        <a href="https://egghead.io/courses/advanced-react-component-patterns">
          Egghead course link
        </a>{' '}
        🎓
      </h4>
      <h4>
        <a href="https://github.com/kentcdodds/advanced-react-patterns">
          Original repo link
        </a>{' '}
        ⭐️
      </h4>
      <h4>
        <a href="https://github.com/v1adko/advanced-react-patterns">
          Restructured with CRA repo link
        </a>{' '}
        by <a href="https://twitter.com/v1adko_">v1adko</a> 🐦
      </h4>
    </div>
  );

  render() {
    const { timesClicked, on } = this.state;
    return (
      <div>
        <h2>
          Advanced React Patterns by{' '}
          <a href="https://twitter.com/kentcdodds">@kentcdodds</a> 🐦
        </h2>
        {this.renderLinks()}
        <hr />
        <p>Render props:</p>
        <Toggle
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
              {toggle.on ? "It's on!" : 'Off :('}
              <br />
              <button
                {...toggle.getTogglerProps({
                  onClick: () => alert('Clicked!')
                })}
              >
                {toggle.on ? 'on' : 'off'}
              </button>
              <br />
              <button onClick={() => toggle.reset()}>Reset</button>
            </div>
          )}
        />
        <hr />
        <p>Controlled components example:</p>
        {/* 14 Controlled component example */}
        <MyUpperCaseInput />
        <hr />
        {/* 14 controlled-component-props */}
        <p>Conrolled components + controlled props:</p>
        <Toggle
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
      <hr />
      </div>
    );
  }
}

export default App;
