import { defineMessages } from 'react-intl';
export const scope = 'tables';
export default defineMessages({
  places: {
    name: {
      id: `${scope}.name`,
    },
    picture: {
      id: `${scope}.place.picture`,
    },
    dateInit: {
      id: `${scope}.place.dateInti`,
    },
    dateEnd: {
      id: `${scope}.place.dateEnd`,
    },
  },
  actions: {
    id: `${scope}.actions`,
  },
  delete: {
    id: 'labels.delete',
  },
  file: {
    name: {
      id: `${scope}.name`,
    },
    file: {
      id: `${scope}.file.file`,
    },
    createdAt: {
      id: `${scope}.file.createdAt`,
    },
  },
  see: {
    id: `${scope}.see`,
  },
});
