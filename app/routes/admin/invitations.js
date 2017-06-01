import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// console.log(this.store)
		// console.log(this.get('store'))
		return this.get('store').findAll('invitation')
	},

	actions: {
		deleteInvitation(invitation) {
			const confirmation = confirm('确定删除吗？')
			if (confirmation) {
				invitation.destroyRecord();
			}
		}
	}
});
