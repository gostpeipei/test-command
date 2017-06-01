import Ember from 'ember';
// import Faker from 'faker';

export default Ember.Controller.extend({
	libraries: [],
	books: [],
	authors: [],

	actions: {
		generateLibraries(volume) {
			const counter = parseInt(volume);

			for (let i = 0; i < counter; i++) {
				const isTheLast = i === counter - 1;
				this._saveRandomLibrary(isTheLast);
			}
		},

		deleteLibraries() {
			this._destroyAll(this.get('libraries'));

			this.set('libDelDone', true);
		},

		generateBooksAndAuthors(volume) {
			const counter = parseInt(volume);

			for (let i = 0; i < counter; i++) {
				const isTheLast = i === counter - 1;
				const newAuthor = this._saveRandomAuthor(isTheLast);

				this._generateSomeBooks(newAuthor);
			}
		},

		deleteBooksAndAuthors() {
			this._destroyAll(this.get('books'));
			this._destroyAll(this.get('authors'));

			this.set('authDeleDone', true);
		}
	},

	_saveRandomLibrary(isLast) {
		const randomLibrary = this.store.createRecord('library').randomize();

		randomLibrary.save().then( () => {
			if (isLast) {
				this.set('libDone', true)
			}
		})
	},

	
});








