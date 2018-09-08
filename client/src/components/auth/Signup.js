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
    errorMessage: PropTypes.string,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {
    errorMessage: '',
  };

  onSubmit = formProps => {
    const { signup, history } = this.props;
    signup(formProps, () => {
      history.push('/feature');
    });
  };

  render() {
    const { handleSubmit, errorMessage } = this.props;
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
        <div>{errorMessage}</div>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
