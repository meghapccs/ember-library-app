// import Ember from 'ember';
import Authenticated from '../routes/authenticated';

export default Authenticated.extend({
	model: function(){
		console.log(this.store.findAll('library'));
		return this.store.findAll('library');
	},
	actions: {
		deleteBook: function(book){
			console.log('coming here');
			let confirmation = confirm("Are you sure ?");
			if (confirmation){
				book.destroyRecord();
			}

		},
		editBook: function(book){
			this.transitionTo('edit',book);
		}
	}
});
// export default Ember.Route.extend({
// 	model: function(){
// 		console.log(this.store.findAll('library'));
// 		return this.store.findAll('library');
// 	},
// 	actions: {
// 		deleteBook: function(book){
// 			console.log('coming here');
// 			let confirmation = confirm("Are you sure ?");
// 			if (confirmation){
// 				book.destroyRecord();
// 			}

// 		},
// 		editBook: function(book){
// 			this.transitionTo('edit',book);
// 		}
// 	}
// });