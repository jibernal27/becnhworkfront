/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SingUp from 'containers/SignUp/Loadable';
import NavBar from 'components/NavBar/Loadable';
import LogOut from 'containers/LogOut/Loadable';
import LogIn from 'containers/LogIn/Loadable';

import injectReducer from 'utils/injectReducer';
import api from 'server';
import { changeUser } from 'redux/user/actions';

import GlobalStyle from '../../global-styles';
import reducer from './reducer';
import { changeDataInit } from './actions';
class App extends Component {
  async componentDidMount() {
    const { loadInitData, setUser } = this.props;
    const currentToken = localStorage.getItem('auth');
    if (currentToken) {
      api.setToken(currentToken);
    }
    const [{ data }, { data: userData, error: userError }] = await Promise.all([
      api.user.appInit(),
      api.user.getProfile(),
    ]);
    loadInitData(data);
    if (!userError) {
      setUser(userData);
    }
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/login" component={LogIn} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadInitData: data => dispatch(changeDataInit(data)),
    setUser: data => dispatch(changeUser(data)),
  };
}

const withReducer = injectReducer({ key: 'app', reducer });
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
)(App);
