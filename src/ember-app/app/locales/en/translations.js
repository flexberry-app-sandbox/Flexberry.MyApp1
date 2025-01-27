import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMyApp1BuildingLForm from './forms/i-i-s-my-app1-building-l';
import IISMyApp1EmployeeLForm from './forms/i-i-s-my-app1-employee-l';
import IISMyApp1BuildingEForm from './forms/i-i-s-my-app1-building-e';
import IISMyApp1EmployeeEForm from './forms/i-i-s-my-app1-employee-e';
import IISMyApp1BuildingModel from './models/i-i-s-my-app1-building';
import IISMyApp1EmployeeModel from './models/i-i-s-my-app1-employee';
import IISMyApp1RoomModel from './models/i-i-s-my-app1-room';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-my-app1-building': IISMyApp1BuildingModel,
    'i-i-s-my-app1-employee': IISMyApp1EmployeeModel,
    'i-i-s-my-app1-room': IISMyApp1RoomModel,
  },

  'application-name': 'My app1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...',
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu',
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings',
          },
          'show-menu': {
            caption: 'Show menu',
          },
          'hide-menu': {
            caption: 'Hide menu',
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language',
          },
        },
        login: {
          caption: 'Login',
        },
        logout: {
          caption: 'Logout',
        },
      },

      footer: {
        'application-name': 'My app1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'My app1',
          title: 'My app1',
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.',
        },
        index: {
          caption: 'Home',
          title: '',
        },
        'my-app1': {
          caption: 'MyApp1',
          title: 'MyApp1',
          'i-i-s-my-app1-building-l': {
            caption: 'Building',
            title: '',
          },
          'i-i-s-my-app1-employee-l': {
            caption: 'Employee',
            title: '',
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },
    'i-i-s-my-app1-building-l': IISMyApp1BuildingLForm,
    'i-i-s-my-app1-employee-l': IISMyApp1EmployeeLForm,
    'i-i-s-my-app1-building-e': IISMyApp1BuildingEForm,
    'i-i-s-my-app1-employee-e': IISMyApp1EmployeeEForm,
  },

});

export default translations;
