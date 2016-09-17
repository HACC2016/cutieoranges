Template.FarmersMarketSearch.onRendered(function() {
  GoogleMaps.load({
    v: '3',
    key: 'AIzaSyBzXBrUw69VMLb1mnPfieKCWiAfqrIYbpY',
    libraries: 'geometry,places'});
});

Template.FarmersMarketSearch.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      var lat = 20.6689659;

      var long = -157.3808888;

      return {
        center: new google.maps.LatLng(lat, long),
        zoom: 8,
        streetViewControl: false
      };
    }
  }
});


Template.FarmersMarketSearch.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {

    /*
     var contentString = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
     'sandstone rock formation in the southern part of the '+
     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
     'south west of the nearest large town, Alice Springs; 450&#160;km '+
     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
     'Aboriginal people of the area. It has many springs, waterholes, '+
     'rock caves and ancient paintings. Uluru is listed as a World '+
     'Heritage Site.</p>'+
     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
     '(last visited June 22, 2009).</p>'+
     '</div>'+
     '</div>';

     var infowindow = new google.maps.InfoWindow({
     content: contentString
     });
     */


    // Add a marker to the map once it's ready
    /*var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
      scale: 10
    });*/

    /*
     marker.addListener('click', function() {
     infowindow.open(map, marker);
     });*/
  });
});
