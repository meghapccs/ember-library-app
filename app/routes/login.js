import Ember from 'ember';
export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model: function(){
    return this.store.createRecord('user');
  },
  actions: {
    loginUser: function(newUser) {
      var loginController = this.controllerFor('login');
      // var model = loginController.get('model');
      // var username = model.get('username'); 
      var self = this;

      // var password = model.get('password');

         newUser.save().then(function(response){
        // console.log('user');
     // console.log(response.get('password'));
     // console.log(response.get('token'));
   // if (username === response.get('username') && password === response.get('password')) {
     loginController.setProperties({ username: null, password: null,token: null });

      var transition = self.get('session').get('savedTransition');

       //set isLoggedIn so the UI shows the logout button
       self.get('session').login();

       // self.get('session').set('currentUser', username);
       self.get('session').set('authKey', response.get('token'));

      // Ember.$.cookie('currentUser', username);
      Ember.$.cookie('authKey', response.get('token'));

      //if the user was going somewhere, send them along, otherwise default to `/posts`
       if (transition) {
           transition.retry();
       } else {
           self.transitionTo('libraries');
        }
  // }
  // else
  // {
  //   // self.transitionTo('login');
  //   Ember.get(self, 'flashMessages').danger('Invalid username/password');
  //   var model = self.controller.get('model');
  //   model.rollbackAttributes();
  // }
  });
}

}
});