/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
 waitOn: function() { return [Meteor.subscribe("FarmersMarket"), Meteor.subscribe("Vendors")]; },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'index'
});

Router.route('/FarmersMarket/:_id', {
  template: 'FarmersMarketProfile',
  data: function() {
    return{fmData: FarmersMarket.find({"_id":this.params._id})};
  }
});

Router.route('/Vendor/:_id', {
  template: 'VendorsProfile',
  data: function() {
    return{vendorData: Vendors.find({"_id":this.params._id})};
  }
});
