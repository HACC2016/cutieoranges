var eventsSeed = [
    {
        eventName: "Farmers Market Registration",
        eventDescription: "Start a Market!",
        eventDate: new Date(2016,9,22)
    },
    {
        eventName: "End of HACC",
        eventDescription: "Finishing the Code Challenge!",
        eventDate: new Date(2016,9,24)
    },
    {
        eventName: "Apple Picking",
        eventDescription: "Pick all the apples!",
        eventDate: new Date(2016,10,7)
    },
    {
        eventName: "Orange Picking",
        eventDescription: "Pick all the oranges!",
        eventDate: new Date(2016,11,10)
    }
];


if (EventsFA.find().count() === 0){
    _.each(eventsSeed, function(eventSeed){
        EventsFA.insert(eventSeed);
    });
}