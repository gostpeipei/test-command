import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Route.reopen({
	isShowNavbar: true,
	setupController() {
		// console.log(this.isShowNavbar === this.get('isShowNavbar'))
		console.log('111')
		this._super(...arguments);
		this.controllerFor('application').set('isShowNavbar', this.get('isShowNavbar'));
	}
})
export default App;
