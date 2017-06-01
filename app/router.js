import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,


  //     didTransition() {
  //   this._super(...arguments)

  //   let currentRoute = this.get('container')
  //   .lookup(`route:${this.get('currentRouteName')}`)

  //   // console.log(currentRoute)
  //   console.log(currentRoute)
  //   console.log(this.get('currentRouteName'))
  //   // this.get('container').lookup('controller:application').set(
  //   //     'showNavbar', _.isUndefined(currentRoute.get('showNavbar'))
  //   // )
  // }
});


Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
    this.route('seeder');
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
  })

  this.route('test');

  this.route('404', {path: '*:'})
  this.route('authors');
  this.route('books');
});

export default Router;
