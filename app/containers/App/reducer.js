/*
 *
 * LanguageProvider reducer
 *
 */
import produce from 'immer';

import { LOAD_INITIAL_DATA } from './constants';

export const initialState = {
  initialData: {},
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_INITIAL_DATA:
        draft.initialData = action.initialData;
        break;
    }
  });

export default languageProviderReducer;
