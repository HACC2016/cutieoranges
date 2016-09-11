/**
 * Farmers Market Seed
 */


var farmersmarketSeed = [
  {
    name: "Waipahu District Park (People's Open Market",
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
    phone: "(808) 123-4567",
    email: "",
    dateModified: moment("2016-04-20").toDate()
  }
];


if (FarmersMarket.find().count() === 0){
  _.each(farmersmarketSeed, function(farmersmarkets){
    FarmersMarket.insert(farmersmarkets);
  });
}