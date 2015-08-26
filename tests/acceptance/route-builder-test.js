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

    assert.equal(name, 'application');
  });
});
