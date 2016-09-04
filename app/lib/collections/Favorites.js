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

Favorites.attachSchema(new SimpleSchema({

  /* Farmers Market, Vendor, etc ID*/
  favoriteId:{
    type: String,
    optional: false
  },

  owner:{
    type: String,
    optional: false
  }
}));

if (Meteor.isServer) {
  Meteor.publish(favorites, function () {
    return Favorites.find();
  });
}