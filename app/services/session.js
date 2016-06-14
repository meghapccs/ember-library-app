import Ember from 'ember';

export default Ember.Service.extend({
  //property to hold currentUser or an authKey
  currentUser: null,
  // property in conjunction with currentUser to determine if to display the logout button
  loggedIn: false,
  //stores the url path the user was visiting for later redirect: 
  savedTransition: null,



isCurrentUser: Ember.computed.notEmpty('currentUser'),
  isLoggedIn: Ember.computed.equal('loggedIn', true),
  //returns true if 'isCurrentUser' and 'isloggedIn' are both true and returns false if any of them is false
  // If it returns true, we use it as a flag to show the log out button
  currentlyLoggedIn: Ember.computed.and('isCurrentUser', 'isLoggedIn'),



login: function() {
    this.setProperties({ savedTransition: null, loggedIn: true });
  },



logout: function() {
    this.set('loggedIn', false);
  }
});
