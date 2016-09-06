/**
 * Farmers Market Seed
 */


var farmersmarketSeed = [
  {
    name: "Waipahu Disctrict Park (People's Open Market",
    description: "We sell the freshest produce!",
    streetAddress: "94-230 Paiwa Street",
    city: "Waipahu",
    zipcode: "96797",
    latitude: "21.3880307580004",
    longitude: "-157.999369856999",
    locationInfo: "",
    island: "Oahu",
    website: "http://www.co.honolulu.hi.us/parks/programs/pom",
    contact: "",
    phone: "",
    email: "",
    dateModified: moment("2016-09-31").toDate()
  }
];


if (FarmersMarket.find().count() === 0){
  _.each(farmersmarketSeed, function(farmersmarkets){
    FarmersMarket.insert(farmersmarkets);
  });
}