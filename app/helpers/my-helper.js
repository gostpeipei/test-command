import Ember from 'ember';

export function myHelper(params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper(myHelper);
