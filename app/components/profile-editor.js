import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		console.log('init.....');
		this._super(...arguments);
		this.errors = [];
	},

	// didUpdateAttrs() {
	// 	console.log('UpdateAttrs')
	// 	console.log(this)
	// 	this._super(...arguments);
	// 	this.set('errors', []);
	// },

	didInsertElement() {
		console.log(this)
		console.log(this._super())
		this._super(...arguments);
		console.log(this.$())    //this.$() 返回的this是组建外面包着的DIV
		console.log($())
	},

	willDestroyElement() {
		this._super(...arguments);
		console.log('willDestroyElement')
	},
	
	actions: {
		required(event) {
			console.log(event.target.value)
			if(!event.target.value) {
				this.get('errors').pushObject({
					message: `${event.target.name} is required`
				})
			}
		},
		removeSelf() {
			this.$('button').remove()
		}
	}
});
