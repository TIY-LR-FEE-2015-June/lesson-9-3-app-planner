import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  path: '',
  pod: false,
  parent: null,
  children: [],

  fullName: Ember.computed(function() {
    if (this.get('parent')) {
      return `${this.get('parent.fullName')}/${this.get('name')}`;
    }

    return this.get('name');
  }),
});

