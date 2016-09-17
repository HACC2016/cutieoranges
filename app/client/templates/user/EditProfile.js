Template.EditProfile.events({
    'submit form': function(e) {
        e.preventDefault();

        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.email": $(e.target).find('[id=input-email]').val()}});

    }
});