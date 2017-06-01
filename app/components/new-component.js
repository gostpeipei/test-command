import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'nav',
	classNames: ['c1'],
	// classNameBindings: ['boolean:name1'],
	// boolean: true
	// classNameBindings: ['isEnabled:className1:className2'],
	// isEnabled: true
	// 
	classNameBindings: ['asd'],
	asd: 'aaa',
	attributeBindings: ['href','aa:attr'],
	href: 'http://baidu.com',
	aa: 'http:asd.com'
});
