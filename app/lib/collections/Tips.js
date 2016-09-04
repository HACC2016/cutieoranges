/**
 * Tips collection.
 * Initializes Tips collection and provides methods
 * for accessing the collection.
 * */

tips = "Tips";

Tips = new Mongo.Collection(tips);

/**
 * Schema for Tips
 */

Tips.attachSchema(new SimpleSchema({

  tips:{
    type: String,
    optional: false
  }
}));

if (Meteor.isServer) {
  Meteor.publish(tips, function () {
    return Tips.find();
  });
}