import Ember from 'ember';

export default Ember.Component.extend({
});


//  绑定input
Ember.TextField.reopen({  
    attributeBindings: ['data-toggle', 'data-placement']
});

// //  绑定link-to
Ember.LinkComponent.reopen({  
    attributeBindings: ['data-toggle']
});