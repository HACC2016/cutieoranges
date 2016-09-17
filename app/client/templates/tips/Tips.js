Template.Tips.helpers({

    pickTip: function(){
        return  _.sample(Tips.find({}).fetch());
    }
});