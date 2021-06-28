import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  vi: {
    id: `${scope}.vi`,
    defaultMessage: 'Vietnamese',
  },
});
