import { Serializer as BuildingSerializer } from
  '../mixins/regenerated/serializers/i-i-s-my-app1-building';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BuildingSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
