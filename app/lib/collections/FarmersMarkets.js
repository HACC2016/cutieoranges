/**
 * FarmersMarket collection.
 * Initializes FarmersMarket collection and provides methods
 * for accessing the collection.
 * */

farmersMarket = "FarmersMarket";  // avoid typos, this string occurs many times.

FarmersMarket= new Mongo.Collection(farmersMarket);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new record.
   * @param doc The FarmersMarket document.
   */
  addMarket: function(doc) {
    check(doc, FarmersMarket.simpleSchema());
    FarmersMarket.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a record.
   * @param doc The FarmersMarket document.
   * @param docID It's ID.
   */
  editMarket: function(doc, docID) {
    check(doc, FarmersMarket.simpleSchema());
    FarmersMarket.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(farmersMarket, function () {
    return FarmersMarket.find();
  });
}


/**
 * Schema for FarmersMarket
 */
FarmersMarket.attachSchema(new SimpleSchema({

  name: {
    label: "Name",
    type: String,
    optional: false,
    unique: true,
    autoform: {
      group: farmersMarket,
      placeholder: "Farmers Market"
    }
  },

  description:{
    label: "Description",
    type: String,
    optional: true,
    autoform: {
      group: farmersMarket,
      placeholder: "Description"
    }
  },

  day:{
    label: "Open Days",
    type: String,
    optional: false,
    allowedValues: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    autoform:{
      group: farmersMarket,
      placeholder: "Open Days"
    }
  },

  startTime:{
    label: "Opens",
    type: Date,
    optional: true,
    autoform:{
      afFieldInput:{
        group: farmersMarket,
        type: "bootstrap-datetimepicker"
      }
    }
  },

  endTime:{
    label: "Closes",
    type: Date,
    optional: true,
    autoform:{
      afFieldInput:{
        group: farmersMarket,
        type: "bootstrap-datetimepicker"
      }
    }
  },

  streetAddress:{
    label: "Street Address",
    type: String,
    optional: true,
    autoform: {
      group: farmersMarket,
      placeholder: "Street Address"
    }
  },

  city:{
    label: "City",
    type: String,
    optional: true,
    autoform: {
      group: farmersMarket,
      placeholder: "City"
    }
  },

  zipcode:{
    label: "Zip Code",
    type: String,
    optional: true,
    autoform: {
      group: farmersMarket,
      placeholder: "Zip Code"
    }
  },

  latitude:{
    label: "Latitude Coordinate",
    type: Number,
    decimal: true,
    optional: true,
    autoform:{
      group: farmersMarket,
      placeholder: "Latitude Coordinate"
    }
  },

  longitude:{
    label: "Longitude Coordinate",
    type: Number,
    decimal: true,
    optional: true,
    autoform:{
      group: farmersMarket,
      placeholder: "Longitude Coordinate"
    }
  },

  locationInfo:{
    label: "Location Information",
    type: String,
    optional: true,
    autoform: {
      group: farmersMarket,
      placeholder: "Location Information"
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

  website:{
    label: "Website",
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform:{
      placeholder: "Website"
    }
  },

  contact:{
    label: "Contact Name",
    type: String,
    optional: true,
    autoform:{
      group: farmersMarket,
      placeholder: "Contact Name"
    }
  },

  /* Phone number in the following format: (123) 123-1234*/
  phone:{
    label: "Phone Number",
    type:  String,
    optional: true,
    regEx: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
    autoform:{
      group: farmersMarket,
      placeholder: "Phone Number"
    }
  },

  email:{
    label: "Contact Email",
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email,
    autoform:{
      group: farmersMarket,
      placeholder: "Contact Email"
    }
  },

  dateModified:{
    type: Date,
    label: "Last Modified",
    optional: true
  }
}));