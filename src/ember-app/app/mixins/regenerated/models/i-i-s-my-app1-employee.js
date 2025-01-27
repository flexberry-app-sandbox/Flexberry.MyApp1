import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  birthDate: DS.attr('date'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  patronymic: DS.attr('string'),
  room: DS.belongsTo('i-i-s-my-app1-room', { inverse: null, async: false })
});

export let ValidationRules = {
  birthDate: {
    descriptionKey: 'models.i-i-s-my-app1-employee.validations.birthDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-my-app1-employee.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-my-app1-employee.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  patronymic: {
    descriptionKey: 'models.i-i-s-my-app1-employee.validations.patronymic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  room: {
    descriptionKey: 'models.i-i-s-my-app1-employee.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployeeE', 'i-i-s-my-app1-employee', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    patronymic: attr('Patronymic', { index: 2 }),
    birthDate: attr('Birth date', { index: 3 })
  });

  modelClass.defineProjection('EmployeeL', 'i-i-s-my-app1-employee', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    patronymic: attr('Patronymic', { index: 2 }),
    birthDate: attr('Birth date', { index: 3 })
  });
};
