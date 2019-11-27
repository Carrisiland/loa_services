const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: { type: Date, required: true, default: Date.now },
    upvotes: {type: Number, default: 1},
    downvotes: {type: Number, default: 0}
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
