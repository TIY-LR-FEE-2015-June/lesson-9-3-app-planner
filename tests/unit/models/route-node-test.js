import { moduleFor, test } from 'ember-qunit';

moduleFor('model:route-node', 'Route Node Model Test', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it should have default properties', function(assert) {
  var model = this.subject();

  assert.equal(model.get('name'), '');
  assert.equal(model.get('path'), '');
  assert.equal(model.get('pod'), false);

  assert.equal(model.get('parent'), null);
  assert.equal(model.get('children').length, 0);
});
