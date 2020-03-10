/*
 *
 * LanguageProvider reducer
 *
 */
import produce from 'immer';

import { USER_LOGIN, RESET_STATE } from './constants';

export const initialState = {
  user: null,
  isAuth: false,
  files: [],
  places: [],
};

/* eslint-disable default-case, no-param-reassign */
const userProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_LOGIN:
        draft.user = action.user;
        draft.isAuth = true;
        break;
      case RESET_STATE:
        return initialState;
    }
  });

export default userProviderReducer;
