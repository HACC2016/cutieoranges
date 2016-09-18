Template.PostComment.events({
    'submit form': function(){
        event.preventDefault();

        var comment = event.target.Comment.value;
        var curPage = this._id;
        Comments.insert({
            commentId: curPage,
            comment: comment,
            commentCreator: Meteor.user().username,
            dateCreated: new Date()
        });

        event.target.reset();
    }
});

