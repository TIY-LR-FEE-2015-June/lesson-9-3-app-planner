import Ember from 'ember';
import RouteNode from 'app-planner/models/route-node';

export default Ember.Component.extend({
  acceptingInput: false,
  node: false,

  actions: {
    startInput() {
      this.set('acceptingInput', true);
    },
    addNewRoute(newRouteName) {
      var newRoute = RouteNode.create({
        name: newRouteName,
        parent: this.get('node'),
      });

      this.sendAction('addNewChild', newRoute);
      this.set('acceptingInput', false);
      this.set('newRouteName', '');
    }
  }
});
