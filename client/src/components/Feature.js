import React, { Component } from 'react';
import requireAuth from '../hoc/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <p>Feature</p>
      </div>
    );
  }
}

export default requireAuth(Feature);
