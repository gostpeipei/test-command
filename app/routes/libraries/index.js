import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('library')
	},

	actions: {
		deleteLibrary(library) {
			const confirmation = confirm('确定删除吗？')
			if (confirmation) {
				// 删除数据方法1
				// library.deleteRecord();
				// library.save();

				//删除数据方法2
				library.destroyRecord();
			}
		}
	}

});
