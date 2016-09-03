/**
 * Favorites collection.
 * Initializes Favorites collection and provides methods
 * for accessing the collection.
 * */

favorites = "Favorites";

Favorites = new Mongo.Collection(favorites);

/**
 * Schema for Favorites
 */

Comments.attachSchema(new SimpleSchema({

  /* Farmers Market, Vendor, etc ID*/
  favoriteId:{
    type: String,
    optional: false
  },

  owner:{
    label: "Commenter",
    type: String,
    optional: false
  }
}));

if (Meteor.isServer) {
  Meteor.publish(favorites, function () {
    return Favorites.find();
  });
}