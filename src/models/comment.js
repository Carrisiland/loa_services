const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: { type: String, required: true, default: new Date().toString()},
    upvotes: {type: Number, default: 1},
    downvotes: {type: Number, default: 0},
    text: {type: String},
    likersDown: [{type: mongoose.Schema.Types.ObjectId, ref:'User', default: []}],
    likersUp: [{type: mongoose.Schema.Types.ObjectId, ref:'User', default: []}],

});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
