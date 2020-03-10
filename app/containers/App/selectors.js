import { createSelector } from 'reselect';

const selectRouter = state => state.router;
const selectAppInit = state => state.app;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectInitData = () =>
  createSelector(
    selectAppInit,
    app => app.initialData,
  );

export { makeSelectLocation, makeSelectInitData };
