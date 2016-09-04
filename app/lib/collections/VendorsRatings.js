/**
 * Vendors Ratings collection.
 * Initializes Vendors Ratings collection and provides methods
 * for accessing the collection.
 * */

vendorsratings = "VendorsRatings";

VendorsRatings = new Mongo.Collection(vendorsratings);

/**
 * Schema for Ratings
 */

VendorsRatings.attachSchema(new SimpleSchema({

  /* Vendor ID*/
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
  Meteor.publish(vendorsratings, function () {
    return VendorsRatings.find();
  });
}