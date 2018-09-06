import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Header from './Header';

const App = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default hot(module)(App);
