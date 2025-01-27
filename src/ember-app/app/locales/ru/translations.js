import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...',
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!',
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню',
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек',
          },
          'show-menu': {
            caption: 'Показать меню',
          },
          'hide-menu': {
            caption: 'Скрыть меню',
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык',
          },
        },
        login: {
          caption: 'Вход',
        },
        logout: {
          caption: 'Выход',
        },
      },

      footer: {
        'application-name': 'My app1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
      },

      sitemap: {
        'application-name': {
          caption: 'My app1',
          title: 'My app1',
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.',
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления',
    },
    'i-i-s-my-app1-building-l': IISMyApp1BuildingLForm,
    'i-i-s-my-app1-employee-l': IISMyApp1EmployeeLForm,
    'i-i-s-my-app1-building-e': IISMyApp1BuildingEForm,
    'i-i-s-my-app1-employee-e': IISMyApp1EmployeeEForm,
  },

});

export default translations;
