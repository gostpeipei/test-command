import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('contact')
	},

	actions: {
		deleteContact(contact) {
			const confirmation = confirm('确定要删除吗？')
			if (confirmation) {
				contact.destroyRecord();
			}
		}
	}
});
