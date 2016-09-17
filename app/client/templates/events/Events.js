Template.Events.helpers({

    listAllEvents: function(){
        return EventsFA.find({}).fetch();
    }
});

UI.registerHelper("localizedDateAndTime", function(date) {
    if(date) {
        return moment(date).format('MMMM DD, YYYY'); // shorthand for localized format "5/23/2014 3:47 PM"
    }
});