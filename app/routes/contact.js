import Ember from 'ember';
// import RSVP from 'rsvp';
// import DS from 'ember-data';
// console.log(DS)
export default Ember.Route.extend({
	// model() {
	// 	return this.store.createRecord('contact')
	// },

	// actions: {
	// 	sendMsg(newMsg) {
	// 		newMsg.save().then( () => this.transitionTo('admin/contacts') )
	// 	}
	// },

	// actions: {
	// 	sendMsg(newMsg) {
	// 		const contact = this.store.get('contact')
	// 		const emailAddress = contact.emailAddress
	// 		const textMsg = contact.textMsg

	// 		const isValid1 = Ember.computed.match('emailAddress', /^.+@.+\..+$/)
	// 		const isValid2 = Ember.computed.gte('textMsg.length', 5)
	// 		const isValid = Ember.computed.and('isValid1','isValid2')
	// 		const isDisabled = Ember.computed.not('isValid')

	// 		newMsg.save().then( () => this.transitionTo('/admin/contacts') )
	// 	}
	// }



	// model() {
	// 	return this.store.createRecord('contact')
	// },

	// actions: {
	// 	sendMsg(newMsg) {
	// 		newMsg.save()
	// 		// newMsg.save().then( () => this.transitionTo('/admin/contacts'))


	// 		// this.set('resMsg', 'The message has been sent')
	// 		// this.set('emailAddress', '')
	// 		// this.set('textMsg', '')
	// 	}
	// }
});
