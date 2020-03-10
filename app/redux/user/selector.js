import { createSelector } from 'reselect';

const selectUser = state => state.user;

const makeSelectorIsAuth = () =>
  createSelector(
    selectUser,
    user => user.isAuth,
  );
const makeSelectorUser = () =>
  createSelector(
    selectUser,
    user => user.user,
  );
const makePlacesSelectorUser = () =>
  createSelector(
    selectUser,
    user => user.places,
  );
const makeFilesSelectorUser = () =>
  createSelector(
    selectUser,
    user => user.files,
  );
export {
  makeSelectorIsAuth,
  makeSelectorUser,
  makePlacesSelectorUser,
  makeFilesSelectorUser,
};
