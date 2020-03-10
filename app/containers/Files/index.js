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
import { makeFilesSelectorUser } from 'redux/user/selector';
import { setFiles } from 'redux/user/actions';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import FilesTable from 'components/tables/FilesTable';
import messages from './messages';

class PlacesList extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  fetchFiles = async () => {
    const { page } = this.state;
    const { setFilesAction } = this.props;
    const { error, data } = await api.user.listFiles(page);
    if (error) {
      alert('cant fetch files');
    } else {
      setFilesAction(data);
    }
  };

  async componentDidMount() {
    await this.fetchFiles();
  }
  render() {
    const { files } = this.props;
    return (
      <section>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Link to="files/new">
          <FormattedMessage {...messages.newFile} />
        </Link>
        <FilesTable files={files} />
      </section>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    setFilesAction: data => dispatch(setFiles(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  files: makeFilesSelectorUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PlacesList);
