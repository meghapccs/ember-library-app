import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import Ember from 'ember';
// import { belongsTo, hasMany } from 'ember-data/relationships';

var User = Model.extend({
    username: attr('string'),
    password: attr('string')
});

export default User;