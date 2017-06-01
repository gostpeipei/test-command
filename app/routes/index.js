import Ember from 'ember';

export default Ember.Route.extend({
	// init() {
 //    this._super(...arguments)
 //    console.log('application:init');
 //    console.log(this.get('currentRouteName'))
 //  },

 //  beforeModel(transition) {
 //    // any state you want in place before the model is initialized, this is
 //    // called before any model promises are resolved also could be used to
 //    // conditionally prevent access to a route by throwing transition.abort
 //    console.log('application:beforeModel')
 //    console.log(transition)

 //    // transition.abort();
 //  },

 //  model() {
 //    // interesting note, if you transition into a route via a dynamic route
 //    // segment this will never get called because the model will have
 //    // already been specified, ie {{link-to 'article' article}}.
 //    console.log('application:model')
 //  },

 //  afterModel() {
 //    // anything that may need to reference a model
 //    console.log('application:afterModel')
 //  },

 //  activate() {
 //    // only called once on entering a route
 //    this._super(...arguments)
 //    console.log('application:activate')
 //  },

 //  testActivate: function() {
 //    console.log('application:testActivate')
 //  }.on('activate'),

 //  serialize() {
 //    // setup any dynamic routes, fired after #tranfitionTo get called
 //    console.log('application:serialize')
 //  },

 //  setupController(controller) {
 //    // set additional properties on the controller, or override it’s content
 //    this._super(...arguments)
 //    console.log('application:setupController')
 //  },

 //  renderTemplate() {
 //    // can be useful for setting up third party libraries. with a call to
 //    // this._super also could be used to setup a non-default template
 //    this._super(...arguments)
 //    console.log('application:renderTemplate')
 //  },

 //  deactivate() {
 //    this._super(...arguments)
 //    console.log('application:deactivate')
 //  },

 //  testDeactivate: function() {
 //    console.log('application:testDeactivate')
 //  }.on('deactivate'),

 //  actions: {
 //    willTransition() {
 //      // can be used to prevent a transition on make sure some state is ready
 //      // for the next route
 //      console.log('application:willTransition')

 //      // return truthy will bubble up all the way to applicationRoute
 //      return true
 //    },

 //    didTransition() {
 //      console.log('application:didTransition')
 //      console.log('application:--------------------')

 //      // return truthy will bubble up all the way to applicationRoute
 //      return true
 //    },

 //    toTest() {
 //    	this.transitionTo('test')
 //    }
 //  }
});

