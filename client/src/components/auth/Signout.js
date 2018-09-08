import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  static propTypes = {
    signout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { signout } = this.props;
    signout();
  }

  render() {
    return (
      <div>
        <p>you are signed out</p>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
