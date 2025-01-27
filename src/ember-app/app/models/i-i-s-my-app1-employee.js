import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as EmployeeMixin
} from '../mixins/regenerated/models/i-i-s-my-app1-employee';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(EmployeeMixin, Validations, {
});

defineProjections(Model);

export default Model;
