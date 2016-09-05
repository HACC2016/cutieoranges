/**
 * Vendors Products collection.
 * Initializes Vendors collection and provides methods
 * for accessing the collection.
 * */


vendorsproducts = "VendorsProducts";

VendorsProducts = new Mongo.Collection(vendorsproducts);

/**
 * Schema for Vendors Products
 */

VendorsProducts.attachSchema(new SimpleSchema({

  vendorName:{
    label: "Vendor Name",
    type: String,
    optional: false,
    autoform:{
      group: vendors,
      placeholder: "Vendor Name"
    }
  },

  product:{
    label: "Products",
    type: String,
    optional: false,
    allowedValues: function(){
      return Products.find({}).map(function(object){return object.productName;});
    },
    autoform:{
      group: vendors,
      placeholder: "Products"
    }
  }
}));

if (Meteor.isServer) {
  Meteor.publish(vendorsproducts, function () {
    return VendorsProducts.find();
  });
}
