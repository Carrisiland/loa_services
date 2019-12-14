const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
require('../../models/album');
const User = mongoose.model("User");
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Album = mongoose.model('Album');
const Comment = mongoose.model('Comment');
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');

router.post('/', async (req, res)=>{
    let album = new Album({
        user: req.user,
        title: req.body.title,
        visibility: req.body.visibility,
        posts:[],
        postNumbers:0
    })

    const saved = await album.save();

    if (req.user) {
        req.user.albums.push(saved);
        await req.user.save();
      }
      res.redirect('/profile/albums');
})

router.put('/', (req, res)=>{
    Post.findById(req.params.id).then(async (found)=>{
        if (!req.user){
            throw new Error("You need to login to add the post to the album ");
        }
        const user = await User.findById(req.user.id).populate("albums");
        let album = user.albums.filter( (album) =>{
            return album.id == req.params.album;
        })
        album.posts.push(found);
        album.postNumbers += 1;
        await user.save();
        res.status(200).render('/profile/albums');
    })

})

router.get('/:id',  (req,res)=>{
    Album.findById(req.params.id).populate("posts").then( found =>{
    let postArr = [];
    for (i in found.posts){
        postArr.push(found.posts[i]);
    }
    postArr.sort((a, b) => {
        return Date.parse(b.dateCreated) - Date.parse(a.dateCreated);
    });
    res.render('album.html', { posts: postArr, album: found.title });
    });
});




module.exports = router;