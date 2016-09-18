Template.PostComment.events({
    'submit form': function(){
        event.preventDefault();

        var comment = event.target.Comment.value;

        Comments.insert({
            commentId: this._id,
            comment: comment,
            commentCreator: Meteor.user().username,
            dateCreated: new Date()
        });

        event.target.reset();
    }
});

