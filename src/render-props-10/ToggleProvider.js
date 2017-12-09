import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

class ToggleProvider extends React.Component {
    static contextName = '__toggle__'
    static Renderer = class extends React.Component {
      static childContextTypes = {
        [ToggleProvider.contextName]:
          PropTypes.object.isRequired,
      }
      getChildContext() {
        return {
          [ToggleProvider.contextName]: this.props
            .toggle,
        }
      }
      render() {
        return this.props.children
      }
    }
    render() {
      const {
        children,
        ...remainingProps
      } = this.props
      return (
        <Toggle
          {...remainingProps}
          render={toggle => (
            <ToggleProvider.Renderer
              toggle={toggle}
              children={children}
            />
          )}
        />
      )
    }
  }

export default ToggleProvider;
