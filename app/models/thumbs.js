exports.definition = {
	config: {
		columns: {
		    "image": "text",
		    "largeImage": "text",
		    "player": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "thumbs"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};