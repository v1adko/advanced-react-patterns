import React from 'react';

class MyUpperCaseInput extends React.Component {
  state = { upperValue: '', lowerValue: '' };

  handleChange = e =>
    this.setState({
      upperValue: e.target.value.toUpperCase(),
      lowerValue: e.target.value.toLowerCase()
    });

  render() {
    const { upperValue, lowerValue } = this.state;
    return (
      <div>
        <label>
          Upper:&nbsp;
          <input value={upperValue} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Lower:&nbsp;
          <input value={lowerValue} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default MyUpperCaseInput;
