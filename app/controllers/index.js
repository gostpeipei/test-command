import Ember from 'ember';

export default Ember.Controller.extend({
	headerMessage: 'Coming Soon',
	responseMessage: '',
	emailAddress: '',
	// isDisabled: Ember.computed.empty('emailAddress'),     //验证emailAddress 非空 
	isVaild: Ember.computed.match('emailAddress', /^.+@.+\..+$/),    //match方法验证邮箱
	isDisabled: Ember.computed.not('isVaild'),  //根据isVaild的值判断按钮是否激活

	// old
	// actions: {
	// 	fn1() {
	// 		const _that = this;
	// 		const email = this.get('emailAddress');
	// 		const newInvitation = this.store.createRecord('invitation', {email: email})
	// 		console.log(newInvitation);
	// 		newInvitation.save().then(function(res){
	// 			_that.set('responseMessage', 'Thank you! We saved your email address with the following id: '+res.get('id'));
	// 			_that.set('emailAddress', '');
	// 			console.log(_that.get('responseMessage'))
	// 		});
	// 		console.log(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
	// 		this.set('resMsg', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
	// 		this.set('emailAddress', '');
	// 	}
	// },	

	actions: {
		fn1() {
			const email = this.get('emailAddress');
			const newInvitation = this.store.createRecord('invitation', {email: email});
			newInvitation.save().then((res) => {
				this.set('responseMessage', `Thank you! We saved your email address with the following id: ${res.get('id')}`);
				this.set('emailAddress', '');
				console.log(this.get('responseMessage'),'new')
			});
			console.log(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
			this.set('resMsg', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
			this.set('emailAddress', '');
		}
	},

	// actualEmailAddress: Ember.computed('emailAddress', function() {
	// 	console.log('actualEmailAddress function is called: ', this.get('emailAddress'))
	// }),
 
	// emailAddressChanged: Ember.observer('emailAddress', function() {
	// 	console.log('observer is called', this.get('emailAddress'))
	// })
});
