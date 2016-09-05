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

  island:{
    label: "Island",
    type: String,
    optional: false,
    allowedValues: ['Oahu', 'Hawaii Island', 'Kauai', 'Maui', 'Molokai', 'Lanai'],
    autoform:{
      group: farmersMarket,
      placeholder: "Island"
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

  }
}));

if (Meteor.isServer) {
  Meteor.publish(vendors, function () {
    return Vendors.find();
  });
}
