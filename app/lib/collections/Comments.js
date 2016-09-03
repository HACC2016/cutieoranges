/**
 * Comments collection.
 * Initializes comments collection and provides methods
 * for accessing the collection.
 * */

comments = "Comments";

Comments = new Mongo.Collection(comments);

/**
 * Schema for Comments
 */

Comments.attachSchema(new SimpleSchema({

  /* Farmers Market, Vendor, etc ID*/
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
  Meteor.publish(comments, function () {
    return Comments.find();
  });
}
