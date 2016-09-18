Template.ListComments.helpers({
    listComments: function(){
        return Comments.find({commentId: this._id}, {sort: {dateCreated: -1}}).fetch();
    }
});