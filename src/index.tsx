import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import storeInit from './store/store';

ReactDOM.render(
  <Provider store={storeInit}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
