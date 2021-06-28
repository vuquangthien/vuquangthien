/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  category: {
    id: `${scope}.sidebar.category`,
    defaultMessage: 'Category',
  },
  user: {
    id: `${scope}.sidebar.user`,
    defaultMessage: 'User',
  },
  addNewUser: {
    id: `${scope}.sidebar.addNewUser`,
    defaultMessage: 'Add new user',
  },
  updateUserInfo: {
    id: `${scope}.sidebar.updateUserInfo`,
    defaultMessage: 'Update user information',
  },
  assignUser: {
    id: `${scope}.sidebar.assignUser`,
    defaultMessage: 'Assign user to unit',
  },
  assignRole: {
    id: `${scope}.sidebar.assignRole`,
    defaultMessage: 'Assign roles to users',
  },
  assignFunc: {
    id: `${scope}.sidebar.assignFunc`,
    defaultMessage: 'Assign functions to users',
  },
  department: {
    id: `${scope}.sidebar.department`,
    defaultMessage: 'Department',
  },
  application: {
    id: `${scope}.sidebar.application`,
    defaultMessage: 'Application',
  },
  extension: {
    id: `${scope}.sidebar.extension`,
    defaultMessage: 'Extension',
  },
  lookUpApp: {
    id: `${scope}.sidebar.lookUpApp`,
    defaultMessage: 'App lookup',
  },
  searchInformation: {
    id: `${scope}.content.searchInformation`,
    defaultMessage: 'Search information',
  },
  applicationCode: {
    id: `${scope}.content.applicationCode`,
    defaultMessage: 'Application code',
  },
  applicationName: {
    id: `${scope}.content.applicationName`,
    defaultMessage: 'Application name',
  },
  status: {
    id: `${scope}.content.status`,
    defaultMessage: 'Status',
  },
  search: {
    id: `${scope}.content.search`,
    defaultMessage: 'Search',
  },
  listOfApps: {
    id: `${scope}.content.listOfApps`,
    defaultMessage: 'List of apps',
  },
  describe: {
    id: `${scope}.content.describe`,
    defaultMessage: 'Describe',
  },
});
