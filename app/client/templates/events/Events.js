Template.Events.helpers({

    listAllEvents: function(){
        return EventsFA.find({}).fetch();
    }
});