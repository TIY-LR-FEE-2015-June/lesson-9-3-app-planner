import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'app-planner/tests/helpers/start-app';

module('Acceptance | Route Builder', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Loads the Route Builder With an Application Route', function(assert) {
  visit('/');

  andThen(function() {
    var name = findWithAssert('.route-node:eq(0) .route-name').html();
    var url = findWithAssert('.route-node:eq(0) .route-url').html();

    assert.equal(name, 'application');
    assert.equal(url, '/');
  });
});

test('User can click on "Add Route Button" to add a route', function(assert) {
  visit('/');
  click('.route-node:eq(0) .add-route');
  fillIn('.route-node:eq(0) .new-route-input', 'poll');
  click('.route-node:eq(0) .save');

  andThen(function() {
    var name = findWithAssert('.route-node:eq(1) .route-name').html();
    var input = find('.route-node:eq(0) .new-route-input');

    assert.equal(name, 'poll');
    assert.equal(input.length, 0);
  });
});
