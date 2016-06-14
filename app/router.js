import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('libraries', { path: '/' });
  this.route('new');
  this.route('edit', {path: '/libraries/:library_id/edit'});
  this.route('login');
});

export default Router;
