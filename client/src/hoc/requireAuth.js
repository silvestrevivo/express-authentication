import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { auth, history } = this.props;
      if (!auth) {
        history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

/*
This component works as a wrapper for CommentBox component:

  1. With mapStateToProps we get the Boolean value of the user log

  2. componentDidMount trigger the function shouldNavigateAway

  3. shouldNavigateAway is going to make a conditional: if false
    we are redirect to '/' path through 'react-router-dom', if true
    we have access to CommentBox component and we are able to write
    in the textarea

  4. We pass all the props with the spread operator to the child

  5. In CommentBox, we are wrapping the component by the export default

*/
