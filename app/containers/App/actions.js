import { LOAD_INITIAL_DATA } from './constants';

export function changeDataInit(initialData) {
  return {
    type: LOAD_INITIAL_DATA,
    initialData,
  };
}
