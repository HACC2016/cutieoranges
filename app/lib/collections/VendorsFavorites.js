/**
 * Vendors Favorites collection.
 * Initializes Vendors Favorites collection and provides methods
 * for accessing the collection.
 * */

vendorsfavorites = "VendorsFavorites";

VendorsFavorites = new Mongo.Collection(vendorsfavorites);

/**
 * Schema for Favorites
 */

VendorsFavorites.attachSchema(new SimpleSchema({

  /* Vendor, etc ID*/
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
  Meteor.publish(vendorsfavorites, function () {
    return VendorsFavorites.find();
  });
}