var vendorsSeed = [

  {
    vendorName: "Cutie Oranges",
    island: "Oahu",
    description: "We sell only the freshest and finest produce!"
  }

];


if (Vendors.find().count() === 0){
  _.each(vendorsSeed, function(vendor){
    Vendors.insert(vendor);
  });
}