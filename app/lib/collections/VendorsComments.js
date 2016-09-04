/**
 * Vendors Comments collection.
 * Initializes vendor comments collection and provides methods
 * for accessing the collection.
 * */

vendorscomments = "VendorsComments";

VendorsComments = new Mongo.Collection(vendorscomments);

/**
 * Schema for Comments
 */

VendorsComments.attachSchema(new SimpleSchema({

  /* Vendor ID*/
  commentId:{
    type: String,
    optional: false
  },

  commentCreator:{
    label: "Commenter",
    type: String,
    optional: false
  },

  comment:{
    label: "Comment",
    type: String,
    optional: false,
    autoform:{
      group: comments,
      placeholder: "Comment"
    }
  },

  dateCreated:{
    type: Date,
    label: "Date Created",
    optional: false
  }
}));

if (Meteor.isServer) {
  Meteor.publish(vendorscomments, function () {
    return VendorsComments.find();
  });
}
