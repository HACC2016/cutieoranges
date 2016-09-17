Template.UserHome.helpers({

    hasUserPic: function () {
        var imgArray = Meteor.users.find({_id: Meteor.userId()}).map(function (object) {
            return object.profile['profileImage'];
        });

        return imgArray[0] !== undefined;
    }
});

Template.UserHome.events({
    'click .editProfile': function(e){
        e.preventDefault();
        Router.go('/EditProfile');
    }
});
