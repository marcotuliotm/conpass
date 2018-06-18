import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import 'vendor/bootstrap-grid.min.css';
import 'vendor/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  (
    <Provider store={store}>

      <App />


    </Provider>),
  document.getElementById('root'),
);
registerServiceWorker();
