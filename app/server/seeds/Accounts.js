/* When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (!!Meteor.settings.defaultAccount) {
    Accounts.createUser({
      username: Meteor.settings.defaultAccount.username,
      password: Meteor.settings.defaultAccount.password
    });
  }
  else {
    console.log("No default user!  Please invoke meteor with a settings file.");
  }
}

Accounts.validateNewUser(function (user) {
  if (user) {
    var userId = user._id;
    var username = user.username;

      var handle = Meteor.users.find({_id: userId}, {fields: {_id: 1}}).observe({
        added: function () {
          if (_.contains(Meteor.settings.adminUsers, user.username)) {
            Roles.addUsersToRoles(userId, ['admin']);
            handle.stop();
            handle = null;
          }

          Meteor.users.update({_id: userId}, {$set: {"profile.profileImage": "/images/square.png"}});

        }
      });

      return true;
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});



