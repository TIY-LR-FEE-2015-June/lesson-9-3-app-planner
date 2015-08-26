import Ember from 'ember';

export default Ember.Object.extend({
  name: '',
  path: '',
  pod: false,
  parent: null,
  children: [],
});
