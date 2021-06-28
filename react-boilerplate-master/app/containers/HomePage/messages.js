/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'Category',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'User',
  },
  addNewUser: {
    id: `${scope}.addNewUser`,
    defaultMessage: 'Add new user',
  },
  updateUserInfo: {
    id: `${scope}.updateUserInfo`,
    defaultMessage: 'Update user information',
  },
  assignUser: {
    id: `${scope}.assignUser`,
    defaultMessage: 'Assign user to unit',
  },
  assignRole: {
    id: `${scope}.assignRole`,
    defaultMessage: 'Assign roles to users',
  },
  assignFunc: {
    id: `${scope}.assignFunc`,
    defaultMessage: 'Assign functions to users',
  },
  department: {
    id: `${scope}.department`,
    defaultMessage: 'Department',
  },
  application: {
    id: `${scope}.application`,
    defaultMessage: 'Application',
  },
  extension: {
    id: `${scope}.extension`,
    defaultMessage: 'Extension',
  },
});
