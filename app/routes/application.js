import Ember from 'ember';
export default Ember.Route.extend({
   // model : function(){
   //   return this.store.findAll('user');
   // },


afterModel: function(){
     //we use this to load the user from jquery cookie incase after a browser refresh
     // loadUser is defined lower down in this file
     this.loadUser();
   },



actions: {
      logoutUser: function() {
        //clear the user from the store or log the user out of your backend
        this.clearUser();
        this.get('session').logout();
        this.transitionTo('login');
        // Ember.$.removeCookie('currentUser');
        Ember.$.removeCookie('authKey');
     } 
   },



//to clear user after logout
clearUser: function(){
  this.store.find('user', this.get('session').authKey).then(function(g){
     g.destroyRecord();
     g.save();
   }); 
 }, 

// we use this to load the user from jquery cookie incase a user refreshes the browser
//otherwise the user will be logged out
loadUser: function(){
  if(Ember.$.cookie('authKey') && !this.get('session').authKey ){
    // var fetchUserFromCookie = Ember.$.cookie('currentUser');
    var fetchAuthKeyFromCookie = Ember.$.cookie('authKey');

    // this.get('session').set('currentUser',  fetchUserFromCookie);
    this.get('session').set('authKey',  fetchAuthKeyFromCookie);

this.store.find('user', fetchAuthKeyFromCookie);
     // this.store.push('user', {id: 1, username: fetchUserFromCookie});
  }
}
});
