import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  path: '',
  pod: false,
  parent: null,
  children: [],
  createUniqueChildren: Ember.on('init', function() {
    this.set('children', []);
  }),

  fullName: Ember.computed(function() {
    if (this.get('parent')) {
      return `${this.get('parent.fullName')}/${this.get('name')}`;
    }

    return this.get('name');
  }),

  url: Ember.computed(function() {
    var path = this.get('path') || `/${this.get('name')}`;

    if (this.get('parent') && this.get('parent.url') !== '/') {
      return this.get('parent.url') + path;
    }

    return path;
  })
});

