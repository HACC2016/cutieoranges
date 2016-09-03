/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

/* globals Router, Stuff, Meteor */

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return FarmersMarket.findOne(this.params._id); }
});
