import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    addChildToModel(childNode) {
      this.get('node.children').pushObject(childNode);
    }
  }
});
