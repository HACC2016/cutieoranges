tipsSeed = [
    {
        "tips": "Grind your eggshells into a powder and sprinkle in the garden for a calcium boost!"
    },
    {
        "tips": "Plant seedlings in a hollowed out citrus fruit for establishing a root system."
    },
    {
        "tips": "Add some garlic, mint and water in a spray bottle for an organic pesticide."
    },
    {
        "tips": "Reuse eggshells into an organic little pot."
    },
    {
        "tips": "Use vinegar for a natural weed killer."
    },
    {
        "tips": "Mix plant waste in a container with soil for homemade compost."
    },
    {
        "tips": "Keep potatoes,onions, and tomatoes in a cool place but not in the fridge it ruins flavor."
    },
    {
        "tips": "Store salad greens and fresh herbs in a bag filled with a little air, then seal tightly."
    },
    {
        "tips": "Store citrus fruits in the refrigerator to lengthen their lifespan."
    },
    {
        "tips": "Wrap celery in aluminum foil and store it in the refrigerator."
    },
    {
        "tips": "Avoid washing berries until right before eating them, moisture leads to mold."
    },
    {
        "tips": "Store eggplant at room temperature."
    },
    {
        "tips": "Cut off carrot greens and then store the carrot in water for extreme freshness."
    },
    {
        "tips": "Thin asparagus is tender, Fat asparagus is more meaty."
    },
    {
        "tips": "Store cauliflower in a plastic bag and put in the refrigerator, it should keep for about a week."
    },
    {
        "tips": "For every 10 degrees above 30 degrees the apples lifespan decreases dramatically."
    },
    {
        "tips": "Grapes are best stored in a paper bag in the refrigerator, they will last 1-2 weeks"
    },
    {
        "tips": "Pears are picked unripe from trees so have them ripen at room temperature."
    },
    {
        "tips": "Keep wild mushrooms in a paper bag in the cool parts of a refrigerator."
    }
];

if (Tips.find().count() === 0){
    _.each(tipsSeed, function(tip){
        Tips.insert(tip);
    });
}