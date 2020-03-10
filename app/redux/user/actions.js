/*
 *
 * LanguageProvider actions
 *
 */

import { USER_LOGIN, RESET_STATE } from './constants';

export function changeUser(user) {
  return {
    type: USER_LOGIN,
    user,
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
  };
}
