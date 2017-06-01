import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	init() {
		this._super(...arguments);
		console.log('application init')
	},
	model() {
		return RSVP.hash({
			title: 'new title'
		})
	},
  actions: {
    willTransition() {
      // can be used to prevent a transition on make sure some state is ready
      // for the next route
      console.log('application:willTransition')

      // return truthy will bubble up all the way to applicationRoute
      return true
    }
  }
});
