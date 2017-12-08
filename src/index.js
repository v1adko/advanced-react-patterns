import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// To enable code from lessons 1-9
// import App from './compound-components-1-9/App';
// To enable code from lessons 10-*
import App from './render-props-10/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div
      style={{
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <App />
    </div>,
    document.getElementById('root'),
  )
registerServiceWorker();
