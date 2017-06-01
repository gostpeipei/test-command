import DS from 'ember-data';

export default DS.Model.extend({
	emailAddress: DS.attr(),
	textMsg: DS.attr()
	// emailAddress: DS.attr('string'),
	// textMsg: DS.attr('string')
});
