import Ember from 'ember';
import DS from 'ember-data';
export default Ember.Controller.extend({

	emailAddress: '',
	textMsg: '',

	isValid1: Ember.computed.match('emailAddress', /^.+@.+\..+$/), 
	isValid2: Ember.computed.gte('textMsg.length', 5),
	isValid: Ember.computed.and('isValid1','isValid2'),
	isDisabled: Ember.computed.not('isValid'),

	// watch: Ember.observer('textMsg','emailAddress', function() {
	// 	console.log(this.get('isValid1'),this.get('isValid2'))
	// }),

	actions: {
		sendMsg() {
			const emailAddress = this.get('emailAddress');
			const textMsg = this.get('textMsg');
			const newContact = this.store.createRecord('contact', { emailAddress:emailAddress, textMsg:textMsg });
			newContact.save().then( (res) => {
				alert(`We saved your message with the following id ${res.get('id')}, transition to the view page`);
				this.transitionToRoute('admin.contacts')
			});
		}
	}
});
			// const email = this.get('emailAddress');
			// const newInvitation = this.store.createRecord('invitation', {email: email});
			// newInvitation.save().then((res) => {
			// 	this.set('responseMessage', `Thank you! We saved your email address with the following id: ${res.get('id')}`);
			// 	this.set('emailAddress', '');
			// 	console.log(this.get('responseMessage'),'new')
			// });
			// console.log(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
			// this.set('resMsg', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
			// this.set('emailAddress', '');






		// 	const email = this.get('emailAddress');
		// 	const message = this.get('textMsg');
		// 	const newContact = this.store.createRecord('contact', { email:email, message:message });  //创建记录
		// 	newContact.save();
		// 	// newContact.save().then( (res) => {
		// 	// 	alert(`We saved your message with the following id ${res.get('id')}, transition to the view page`)
		// 	// 	this.transitionToRoute('admin.contacts')
		// 	// 	// location.href = '/admin/contacts'
		// 	// })
		// }


			// alert('Sending message...')
			// this.set('resMsg', 'The message has been sent')
			// this.set('emailAddress', '')
			// this.set('textMsg', '')
