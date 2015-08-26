import { module, test } from 'qunit';
import RouteNode from 'app-planner/models/route-node';

module('Unit | Route Node Model');

test('it should have default properties', function (assert) {
  var model = RouteNode.create();

  assert.equal(model.get('name'), '');
  assert.equal(model.get('path'), '');
  assert.equal(model.get('pod'), false);

  assert.equal(model.get('parent'), null);
  assert.equal(model.get('children').length, 0);
});

test('it should compute the fullName property', function (assert) {
  var parent = RouteNode.create({name: 'poll'});
  var child = RouteNode.create({name: 'form', parent: parent});
  var subChild = RouteNode.create({name: 'create', parent: child});

  assert.equal(parent.get('fullName'), 'poll');
  assert.equal(child.get('fullName'), 'poll/form');
  assert.equal(subChild.get('fullName'), 'poll/form/create');
});

test('it should compute a url for routes', function(assert) {
  var parent = RouteNode.create({name: 'polls', path: '/'});
  var child = RouteNode.create({name: 'show', path: '/:poll_id', parent: parent});
  var subChild = RouteNode.create({name: 'form', parent: child});

  assert.equal(child.get('url'), '/:poll_id');
  assert.equal(subChild.get('url'), '/:poll_id/form');
});
