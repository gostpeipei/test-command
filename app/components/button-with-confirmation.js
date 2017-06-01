import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		launchConfirmDialog() {
			this.set('confirmShown', true)
		},

		submitConfirm() {
			// this.set('confirmShown', false)
			this.get('onConfirm')();
		},

		cancelConfirm() {
			this.set('confirmShown', false)
		}
	}
});
