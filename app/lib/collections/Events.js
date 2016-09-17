/**
 * Events collection.
 * Initializes comments collection and provides methods
 * for accessing the collection.
 * */

eventsFA = "Events";

EventsFA = new Mongo.Collection(eventsFA);

/**
 * Schema for Events
 */


if (Meteor.isServer) {
  Meteor.publish(eventsFA, function () {
    return EventsFA.find();
  });
}


EventsFA.attachSchema(new SimpleSchema({


  eventName:{
    label: "Event Name",
    type: String,
    optional: false
  },

  eventDescription:{
    label: "Event Description",
    type: String,
    optional: false,
    autoform:{
      group: comments,
      placeholder: "Event Description"
    }
  },

  eventDate:{
    type: Date,
    label: "Date",
    optional: false
  }
}));
