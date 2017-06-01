import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	birthday: DS.attr('date'),
	age: DS.attr('number'),
	admin: DS.attr('boolean', {defaultValue: false}),   //第二个参数定义默认值

	spend: DS.attr('dollars'),  //自定义转换  在transforms文件夹下的

	fullName: Ember.computed('firstName', 'lastName', function() {
		return `${this.get('firstName')} ${this.get('lastName')}`;
	}),

	persion2: DS.belongsTo('persion2')
});
