/**
 * Ratings collection.
 * Initializes Ratings collection and provides methods
 * for accessing the collection.
 * */

ratings = "Ratings";

Ratings = new Mongo.Collection(ratings);

/**
 * Schema for Ratings
 */

Favorites.attachSchema(new SimpleSchema({

  /* Farmers Market ID*/
  FMId:{
    type: String,
    optional: false
  },

  user:{
    type: String,
    optional: false
  },

  rating:{
    type: SimpleSchema.Integer,
    optional: false
  }
}));

if (Meteor.isServer) {
  Meteor.publish(ratings, function () {
    return Ratings.find();
  });
}