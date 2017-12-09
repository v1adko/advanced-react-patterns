import React from 'react';
import { Broadcast } from 'react-broadcast';
import Toggle from './Toggle';

class ToggleProvider extends React.Component {
  static channel = '__toggle_channel__';

  render() {
    const { children, ...remainingProps } = this.props;
    return (
      <Toggle
        {...remainingProps}
        render={toggle => (
          <Broadcast channel={ToggleProvider.channel} value={toggle}>
            {children}
          </Broadcast>
        )}
      />
    );
  }
}

export default ToggleProvider;
