/**
 * Users collection.
 * Initializes Users collection and provides methods
 * for accessing the collection.
 * */


users = "Users";

Users = new Mongo.Collection(users);

/**
 * Schema for Users
 */

Users.attachSchema(new SimpleSchema({

  firstName:{
    label: "First Name",
    type: String,
    optional: true,
    autoform:{
      group: users,
      placeholder: "First Name"
    }

  },

  lastName:{
    label: "Last Name",
    type: String,
    optional: true,
    autoform:{
      group: users,
      placeholder: "Last Name"
    }

  },

  email:{
    label: "Email",
    type: String,
    optional: false,
    unique: true,
    autoform:{
      group: users,
      placeholder: "Email"
    }
  },

  roles: {
    type: Object,
    optional: true,
    blackbox: true
  }
}));

if (Meteor.isServer) {
  Meteor.publish(users, function () {
    return Users.find();
  });
}

