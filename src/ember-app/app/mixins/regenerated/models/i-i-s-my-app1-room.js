import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number'),
  building: DS.belongsTo('i-i-s-my-app1-building', { inverse: 'room', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-my-app1-room.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  building: {
    descriptionKey: 'models.i-i-s-my-app1-room.validations.building.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'i-i-s-my-app1-room', {
    number: attr('Number', { index: 0 })
  });

  modelClass.defineProjection('RoomL', 'i-i-s-my-app1-room', {
    number: attr('', { index: 0 })
  });
};
