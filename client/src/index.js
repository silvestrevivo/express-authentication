import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../assets/sass/style.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={Signup} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
