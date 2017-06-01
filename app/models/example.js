import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr('string'),
	age: DS.attr('number'),
	birthday: DS.attr('date'),
	admin: DS.attr('boolean'),
	fullName: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`
	})
});
