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

export { makeSelectorIsAuth, makeSelectorUser };
