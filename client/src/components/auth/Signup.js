import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="email">
            Email
            <input type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            Password
            <input type="text" />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Signup;
