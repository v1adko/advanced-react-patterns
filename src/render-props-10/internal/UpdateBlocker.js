import React from 'react';

class UpdateBlocker extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return this.props.children;
  }
}

export default UpdateBlocker;
