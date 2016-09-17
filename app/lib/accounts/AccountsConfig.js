if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Accounts.onLogin(function () {
    Router.go('Home')
  });
}