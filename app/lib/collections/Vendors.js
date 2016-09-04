/**
 * Vendors collection.
 * Initializes Vendors collection and provides methods
 * for accessing the collection.
 * */


vendors = "Vendors";

Vendors = new Mongo.Collection(vendors);

/**
 * Schema for Vendors
 */

Vendors.attachSchema(new SimpleSchema({

  vendorName:{
    label: "Vendor Name",
    type: String,
    optional: false,
    autoform:{
      group: vendors,
      placeholder: "Vendor Name"
    }
  },

  description:{
    label: "Description",
    type: String,
    optional: true,
    autoform:{
      group: vendors,
      placeholder: "Description"
    }

  },

  products:{
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
  Meteor.publish(vendors, function () {
    return Vendors.find();
  });
}
