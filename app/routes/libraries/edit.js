import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('library', params.library_id);
	},

	setupController(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Edit Library');
		controller.set('buttonLabel', 'Save Changes')
	},

	renderTemplate() {
		this.render('libraries/form')
	},

	actions: {
		saveLibrary(newLibrary) {
			console.log(this.router.transitionTo)
			// newLibrary.save().then( () => {debugger; this.transitionTo('libraries')} )
		},
		
		
		willTransition(transition) {
			const model = this.controller.get('model');
			if (model.get('hasDirtyAttributes')){
				const confirmation = confirm('未保存，确定离开吗？');
				if (confirmation) {
					model.rollbackAttributes();
				} else {
					trnasition.abort();
				}
			}
		}
	}


	// actions: {
	// 	saveLibrary(newLibrary) {
	// 		newLibrary.save().then( () => this.transitionTo('libraries') );
	// 	},
	// 	willTransition(transition) {
	// 		let model = this.controller.get('model');

	// 		if (model.get('hasDirtyAttributes')) {
	// 			let confirmation = confirm('还没保存，确定离开吗？')

	// 			if (confirmation) {
	// 				model.rollbackAttributes(); //不保存离开 回到改变之前
	// 			} else {
	// 				transition.abort('')   //不离开则阻断过渡
	// 			}
	// 		}
	// 	}
	// }
});
