/**
 * Products collection.
 * Initializes Products collection and provides methods
 * for accessing the collection.
 * */


products = "Products";

Products = new Mongo.Collection(products);

/**
 * Schema for Products
 */

Products.attachSchema(new SimpleSchema({

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
  Meteor.publish(products, function () {
    return Products.find();
  });
}
