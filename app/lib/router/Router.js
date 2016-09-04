/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
 // waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

/*This is cool - Jo*/

/*
Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return FarmersMarket.findOne(this.params._id); }
});
*/