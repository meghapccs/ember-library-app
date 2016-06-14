import Ember from 'ember';


export default Ember.Route.extend({



beforeModel: function(transition) {



//check if cookie contains currentUser or any authKey saved in it
// If non we save where the path the user was navigating to and redirect to login form

if (!Ember.$.cookie('currentUser')){ 

  this.get('session').set('savedTransition', transition);

  this.transitionTo('login');

} else {
  //if jquery cookie has a currentUser saved to it we call the login function 
  // on the session object which is an ember service.
  //the login function sets loggedin from false to true and sets the savedTransition to null

  this.get('session').login();
}


}
});


