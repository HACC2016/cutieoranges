Template.FarmersMarketProfile.onRendered(function(){
  GoogleMaps.load({
  v: '3',
  key: 'AIzaSyBzXBrUw69VMLb1mnPfieKCWiAfqrIYbpY',
  libraries: 'geometry,places'});

});

Template.FarmersMarketProfile.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      var lat = FarmersMarket.findOne({"_id": Router.current().params._id}).latitude;

      var long = FarmersMarket.findOne({"_id": Router.current().params._id}).longitude;

      return {
        center: new google.maps.LatLng(lat, long),
        zoom: 25,
        streetViewControl: false
      };
    }
  }

});

Template.FarmersMarketProfile.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {

    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      scale: 10
    });
  });
});

Template.FarmersMarketProfile.helpers({

  isFavorite: function(){
    return Meteor.users.find({_id: Meteor.userId(), "profile.favorites": this.name}).count() !== 0;
  }
});

Template.FarmersMarketProfile.events({

  'click .favorite': function(e) {
    e.preventDefault();
    Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.favorites": this.name}});
  },

  'click .unfavorite': function(e){
    e.preventDefault();
    Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.favorites": this.name}});
  }

});
