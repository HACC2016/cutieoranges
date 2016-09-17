Template.MarketManager.helpers({

  listAllMarkets: function(){
    return FarmersMarket.find({}).fetch();
  }
});

Template.MarketManager.events({

  /**
   * Event function to delete a textbook and alert
   * @param e
   */
  'click .deleteMarket': function(e) {
    e.preventDefault();
    var currentContactId = this._id;
    Meteor.call("deleteMarket", currentContactId);

  },


  'click .editMarket': function(e){
    e.preventDefault();
    Router.go('/MarketManager/'+ this._id);
  }
});