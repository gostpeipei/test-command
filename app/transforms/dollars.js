import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized / 100;  //return dollars
  },

  serialize(deserialized) {
    return deserialized * 100;  // return cents
  }
});
