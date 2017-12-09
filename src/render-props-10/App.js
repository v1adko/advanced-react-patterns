import React from 'react';
import Switch from './internal/Switch';
import MyUpperCaseInput from './internal/MyUpperCaseInput';
import Header from './internal/Header';
import Post from './internal/Post';
import Toggle from './Toggle';
import ToggleProvider from './ToggleProvider';

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

  renderRenderPropsPart = () => (
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
  );

  // Lesson 14 controlled-component-props
  renderControlledComponentsPart = (on, timesClicked) => (
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
  );

  // Lesson 15 - React context provider
  renderContextProviderPart = () => (
    <ToggleProvider>
      <div>
        <Header />
        <Post />
      </div>
    </ToggleProvider>
  );

  render() {
    const { timesClicked, on } = this.state;
    return (
      <div>
        <h2>
          <span role="img" aria-label="React Logo">⚛️</span> Advanced React Patterns by{' '}
          <a href="https://twitter.com/kentcdodds">@kentcdodds</a> 🐦
        </h2>
        {this.renderLinks()}
        <hr />
        <p>Render props:</p>
        {this.renderRenderPropsPart()}
        <hr />
        <p>Controlled components example:</p>
        <MyUpperCaseInput />
        <hr />
        <p>Conrolled components + controlled props:</p>
        {this.renderControlledComponentsPart(on, timesClicked)}
        <hr />
        <p />
        {this.renderContextProviderPart()}
        <hr />
      </div>
    );
  }
}

export default App;
