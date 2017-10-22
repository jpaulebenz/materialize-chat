import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import './assets/css/index.css';
import App from './containers/index/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
