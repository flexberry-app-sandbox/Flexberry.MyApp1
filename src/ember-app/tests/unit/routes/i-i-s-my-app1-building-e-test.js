import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | i-i-s-my-app1-building-e', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let route = this.owner.lookup('route:i-i-s-my-app1-building-e');
    assert.ok(route);
  });
});
