import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectorIsAuth, makeSelectorUser } from 'redux/user/selector';

import messages from './messages';

const NavBar = ({ isAuth, user }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuth && (
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              <FormattedMessage {...messages.profile} />
            </Link>
            <Link to="/places" className="nav-link">
              <FormattedMessage {...messages.places} />
            </Link>
            <Link to="/files" className="nav-link">
              <FormattedMessage {...messages.files} />
            </Link>
          </Nav>
        )}
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        {isAuth && (
          <Navbar.Text>
            <FormattedMessage
              values={{ user: `${user.first_name} ${user.last_name}` }}
              {...messages.user}
            />
          </Navbar.Text>
        )}
        {isAuth && (
          <Link to="/logout" className="nav-link">
            <FormattedMessage {...messages.logout} />
          </Link>
        )}
        {!isAuth && (
          <Link to="/login" className="nav-link">
            <FormattedMessage {...messages.logIn} />
          </Link>
        )}
        {!isAuth && (
          <Link to="/signup" className="nav-link">
            <FormattedMessage {...messages.signUp} />
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuth: makeSelectorIsAuth(),
  user: makeSelectorUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(NavBar);
