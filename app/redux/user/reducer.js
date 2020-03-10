/*
 *
 * LanguageProvider reducer
 *
 */
import produce from 'immer';
import { remove } from 'lodash';
import {
  USER_LOGIN,
  RESET_STATE,
  SET_FILES,
  SET_PLACES,
  DELETE_PLACE,
  DELETE_FILE,
} from './constants';

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
      case SET_FILES:
        draft.files = action.files;
        break;
      case SET_PLACES:
        draft.places = action.places;
        break;
      case DELETE_PLACE:
        remove(draft.places, p => p.id === action.placeId);
        break;
      case DELETE_FILE:
        remove(draft.files, p => p.id === action.fileId);
        break;
    }
  });

export default userProviderReducer;
