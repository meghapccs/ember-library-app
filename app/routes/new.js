// import Ember from 'ember';

import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
	model: function(){
		return this.store.createRecord('library');
	},
	actions: {
		createLibrary(newLibrary){
			newLibrary.save().then(this.transitionTo('libraries'));
		},
	  willTransition: function() {
    // on transition, if model has unsaved changes, revert them
    var model = this.controller.get('model');
    if (model && model.get('hasDirtyAttributes')) {
    	console.log('coming here');
      model.rollbackAttributes();
    }
  }
}
});