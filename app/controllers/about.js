import Ember from 'ember';

export default Ember.Controller.extend({
	myTest: '',

	computedMyTest: Ember.computed('myTest', function() {
		console.log('computed called', this.get('myTest'))
	}),

	watchMyTest: Ember.observer('myTest', function() {
		console.log('observer called', this.get('myTest'))
	})
});
