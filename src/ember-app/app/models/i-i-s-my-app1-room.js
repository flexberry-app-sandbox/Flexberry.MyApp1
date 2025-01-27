import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as RoomMixin
} from '../mixins/regenerated/models/i-i-s-my-app1-room';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(RoomMixin, Validations, {
});

defineProjections(Model);

export default Model;
