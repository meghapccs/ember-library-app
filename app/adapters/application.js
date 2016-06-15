import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
 session: Ember.inject.service('session'),
  namespace: 'api/v1',
  headers: Ember.computed('session.authKey', function() {
    return {
      'API-TOKEN': this.get('session.authKey'),
      'ANOTHER_HEADER': 'Some header value'
    };
  })
	});
