import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})
const PostSchema = new mongoose.Schema({
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Post = mongoose.model('Post', PostSchema, 'posts');
const User = mongoose.model('User', UserSchema, 'users');
module.exports = {
    User, Post,
}