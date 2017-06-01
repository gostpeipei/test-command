import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('library');
	},

	setupController(controller, model) {
		this._super(...arguments);

		controller.set('title', 'Create a new local Library')
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate() {
		this.render('libraries/form');
	},

	actions: {
		saveLibrary(newLibrary) {
			console.log(newLibrary)
			console.log(newLibrary.save)
			newLibrary.save().then( () => this.transitionTo('libraries') );  //保存成功, 跳转到libraries页面
		},
		willTransition() {
			console.log('离开页面执行')
			this.controller.get('model').rollbackAttributes(); //离开页面后清除数据
		}
	}
});
