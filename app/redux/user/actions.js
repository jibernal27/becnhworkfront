/*
 *
 * LanguageProvider actions
 *
 */

import { USER_LOGIN, RESET_STATE, SET_FILES, SET_PLACES, DELETE_PLACE, DELETE_FILE } from './constants';

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

export function setFiles(files) {
  return {
    type: SET_FILES,
    files,
  };
}

export function setPlaces(places) {
  return {
    type: SET_PLACES,
    places,
  };
}


export function deletePlace(placeId) {
  return {
    type: DELETE_PLACE,
    placeId,
  };
}

export function deleteFile(fileId) {
  return {
    type: DELETE_FILE,
    fileId,
  };
}
