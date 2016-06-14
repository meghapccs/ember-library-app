import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
     logoutUser: function(){
       this.sendAction('action');
     }
   }
});
