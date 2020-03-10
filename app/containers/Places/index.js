/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import api from 'server';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makePlacesSelectorUser } from 'redux/user/selector';
import { setPlaces } from 'redux/user/actions';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PlaceTable from 'components/tables/PlaceTable';
import messages from './messages';

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  fetchPlaces = async () => {
    const { page } = this.state;
    const { setPlacesAction } = this.props;
    const { error, data } = await api.user.listPlaces(page);
    if (error) {
      alert('cant fetch places');
    } else {
      setPlacesAction(data);
    }
  };

  async componentDidMount() {
    await this.fetchPlaces();
  }

  render() {
    const { places } = this.props;
    return (
      <section>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="places/new">
          <FormattedMessage {...messages.newPlace} />
        </Link>
        <PlaceTable places={places} />
      </section>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setPlacesAction: data => dispatch(setPlaces(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  places: makePlacesSelectorUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PlacesList);
