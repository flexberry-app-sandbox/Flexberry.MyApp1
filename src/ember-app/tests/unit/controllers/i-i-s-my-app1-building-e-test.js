import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | i-i-s-my-app1-building-e', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:i-i-s-my-app1-building-e');
    assert.ok(controller);
  });
});