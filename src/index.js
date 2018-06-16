import React from 'react';
import ReactDOM from 'react-dom';
import 'vendor/bootstrap-grid.min.css';
import 'vendor/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

