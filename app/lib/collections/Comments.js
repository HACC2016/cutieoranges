/**
 * Comments collection.
 * Initializes comments collection and provides methods
 * for accessing the collection.
 * */

comments = "Comments";

Comments = new Mongo.Collection(comments);

Meteor.methods({

  addComment: function(doc){
    check(doc, Comments.simpleSchema());
    Comments.insert(doc);
  }
});
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
    type: String,
    optional: false
  },

  comment:{
    type: String,
    optional: false,
    autoform:{
      group: comments
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

  Comments.allow({
    insert: function (userId, doc) {
      return true;
    }
  });
}
