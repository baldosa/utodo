import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
        <title>uTodo</title>
    </Helmet>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
