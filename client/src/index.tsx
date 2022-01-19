import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
<<<<<<< HEAD
import App from './App';
=======
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from '@reducers/rootReducer';
>>>>>>> af0c0a0 (implemented state management with redux)

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
        <title>uTodo</title>
    </Helmet>
<<<<<<< HEAD
      <App/>
=======
    <Provider store={rootReducer}>
      <App/>
    </Provider>
>>>>>>> af0c0a0 (implemented state management with redux)
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals();
