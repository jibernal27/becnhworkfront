import React, { Component } from 'react';
import api from 'server';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { resetState } from 'redux/user/actions';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  async componentDidMount() {
    const { cleanUser, history } = this.props;
    api.removeToken();
    localStorage.removeItem('auth');
    cleanUser();

    history.push('/login');
  }

  render() {
    return <div />;
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    cleanUser: () => dispatch(resetState()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
)(Logout);
