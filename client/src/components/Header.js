import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.string,
  };

  static defaultProps = {
    authenticated: '',
  };

  renderLinks = () => {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <div>
          <Link to="/signout">Signout</Link>
          <Link to="/feature">feature</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
      </div>
    );
  };

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
