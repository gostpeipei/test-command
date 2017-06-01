import Ember from 'ember';

export default Ember.Component.extend({
	buttonLobel: 'Save',

	actions: {
		buttonClicked(param) {
			this.sendAction('action', param)
		}
	}
});


//  绑定input
Ember.TextField.reopen({  
    attributeBindings: ['data-toggle', 'data-placement']
});

// //  绑定link-to
Ember.LinkComponent.reopen({  
    attributeBindings: ['data-toggle']
});