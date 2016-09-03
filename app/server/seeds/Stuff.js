/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var stuffSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (FarmersMarket.find().count() === 0) {
  _.each(stuffSeeds,  function(stuff) {
    FarmersMarket.insert(stuff);
  });
}
