import { defineMessages } from 'react-intl';
export const scope = 'forms.fileInput';
export const scopeSelect = 'forms.selectInput';

export default defineMessages({
  drag: {
    id: `${scope}.drag`,
  },
  remove: {
    id: `${scope}.remove`,
  },
  removeAll: {
    id: `${scope}.removeAll`,
  },
  select: {
    id: `${scopeSelect}.selectOption`,
  },
});
