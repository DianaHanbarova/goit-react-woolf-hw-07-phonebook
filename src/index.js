import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import './index.css';
import rootStor from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      <App />
    </Provider>
  </React.StrictMode>
);
