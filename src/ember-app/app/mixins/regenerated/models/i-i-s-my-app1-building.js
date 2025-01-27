import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  address: DS.attr('string'),
  name: DS.attr('string'),
  room: DS.hasMany('i-i-s-my-app1-room', { inverse: 'building', async: false })
});

export let ValidationRules = {
  address: {
    descriptionKey: 'models.i-i-s-my-app1-building.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-my-app1-building.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  room: {
    descriptionKey: 'models.i-i-s-my-app1-building.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BuildingE', 'i-i-s-my-app1-building', {
    name: attr('Name', { index: 0 }),
    address: attr('Address', { index: 1 })
  });

  modelClass.defineProjection('BuildingL', 'i-i-s-my-app1-building', {
    name: attr('Name', { index: 0 }),
    address: attr('Address', { index: 1 })
  });
};
