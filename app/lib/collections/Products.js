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

  productName:{
    label: "Product Name",
    type: String,
    optional: false,
    autoform:{
      group: products,
      placeholder: "Product Name"
    }
  },

  productType:{
    label: "Product Type",
    type: String,
    optional: false,
    autoform:{
      group: products,
      placeholder: "Product Type"
    }
  }
}));

if (Meteor.isServer) {
  Meteor.publish(products, function () {
    return Products.find();
  });
}
