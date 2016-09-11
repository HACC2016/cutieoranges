var vendorsSeed = [

  /*{
    vendorName: "Cutie Oranges",
    island: "Oahu",


  }*/


];


if (Vendors.find().count() === 0){
  _.each(vendorsSeed, function(vendor){
    Vendors.insert(vendor);
  });
}