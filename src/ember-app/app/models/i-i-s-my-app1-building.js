import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as BuildingMixin
} from '../mixins/regenerated/models/i-i-s-my-app1-building';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(BuildingMixin, Validations, {
});

defineProjections(Model);

export default Model;
