Template.ListComments.helpers({
    listComments: function(){
        return Comments.find({commentId: this._id}).fetch();
    }
});