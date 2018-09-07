import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
  };

  onSubmit = formProps => {
    const { signup } = this.props;
    console.log(formProps);
    // signup(formProps);
    const a = {
      email: 'elena5@test.nl',
      password: '12345',
    };
    signup(a);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">
            Email
            <Field name="email" type="text" component="input" id="email" autoComplete="none" />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            Password
            <Field
              name="password"
              type="password"
              component="input"
              id="password"
              autoComplete="none"
            />
          </label>
        </fieldset>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
