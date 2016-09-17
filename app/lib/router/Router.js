/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
 waitOn: function() { return [Meteor.subscribe("Events"), Meteor.subscribe("FarmersMarket"), Meteor.subscribe("Vendors"),
    Meteor.subscribe("Tips")]; },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'index'
});

Router.route('/Home',{
  layoutTemplate: 'GeneralLayout',
  name: 'Home',
  template: 'UserHome'
});

Router.route('/EditProfile',{
  layoutTemplate: 'GeneralLayout',
  name: 'EditProfile',
  template: 'EditProfile'
});


Router.route('/FarmersMarket',{
  layoutTemplate: 'GeneralLayout',
  template: 'FarmersMarketSearch',
  name: 'FarmersMarketSearch'
});

Router.route('/FarmersMarket/:_id', {
  layoutTemplate: 'GeneralLayout',
  template: 'FarmersMarketProfile',
  data: function() {
    return{fmData: FarmersMarket.find({"_id":this.params._id})};
  }
});

Router.route('/MarketManager', {
  layoutTemplate: 'GeneralLayout',
  name: 'MarketManager'
});


Router.route('/MarketManager/:_id', {
  layoutTemplate: 'GeneralLayout',
  name: 'EditFarmersMarket',
  data: function() { return FarmersMarket.findOne(this.params._id); }
});

Router.route('/Vendor/:_id', {
  layoutTemplate: 'GeneralLayout',
  template: 'VendorsProfile',
  data: function() {
    return{vendorData: Vendors.find({"_id":this.params._id})};
  }
});
