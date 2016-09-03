/**
 * FarmersMarket collection.
 * Initializes FarmersMarket collection and provides methods
 * for accessing the collection.
 * */

farmersMarket = "FarmersMarket";  // avoid typos, this string occurs many times.

FarmersMarket= new Mongo.Collection(farmersMarket);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The FarmersMarket document.
   */
  addStuff: function(doc) {
    check(doc, FarmersMarket.simpleSchema());
    FarmersMarket.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The FarmersMarket document.
   * @param docID It's ID.
   */
  editStuff: function(doc, docID) {
    check(doc, FarmersMarket.simpleSchema());
    FarmersMarket.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(stuff, function () {
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
      group: stuff,
      placeholder: "Farmers Market"
    }
  },

  time:{

  },

  location:{

  },

  locationInfo:{

  },

  island:{

  },

  website:{

  },

  contact:{

  },

  phone:{

  },

  email:{

  }
}));
