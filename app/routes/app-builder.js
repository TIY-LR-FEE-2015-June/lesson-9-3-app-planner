import Ember from 'ember';
import RouteNode from 'app-planner/models/route-node';

export default Ember.Route.extend({
    model: function() {
      return RouteNode.create({
        'name': 'application',
        'path': '/',
        'fullName': '',
      });
    }
});
