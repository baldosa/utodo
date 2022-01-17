import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from '@reducers/rootReducer';

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
        <title>uTodo</title>
    </Helmet>
    <Provider store={rootReducer}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
