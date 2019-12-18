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
const { authenticated } = require('../utils');

router.get('/new', (req, res) => {
  res.render('newAlbum.html');
});

router.post('/', authenticated, async (req, res) => {
  let album = new Album({
    user: req.user,
    title: req.body.title,
    postNumbers: 0,
  });

  console.log("user: ", album);
  
  const saved = await album.save();

  req.user.albums.push(saved);
  await req.user.save();
  
  res.redirect('/album/' + album._id);
});

router.get('/user/:id', (req, res)=>{
    User.findById(req.params.id).populate('albums').then( found =>{
        let albumArr = [];
        for (i in found.albums){
            albumArr.push(found.albums[i]);
        }
        res.status(200).json({albums : albumArr});
    });
});

router.get('/user/', (req, res)=>{
    User.findById(req.user.id).populate('albums').then( found =>{
        let albumArr = [];
        for (i in found.albums){
            albumArr.push(found.albums[i]);
        }
        res.status(200).json({albums : albumArr});
    });
});


router.put('/', (req, res)=>{
    console.log("post id = ", req.body.id)
    Post.findById(req.body.id).then(async (found)=>{
        if (!req.user){
            throw new Error("You need to login to add the post to the album ");
        }
        const user = await User.findById(req.user.id).populate("albums");
        console.log("album id = ", req.body.album)
        let album = user.albums.filter( (album) =>{
            return album.id == req.body.album;
        })
        console.log("albunm = ", album[0])
        album[0].posts.push(found);
        album[0].postNumbers += 1;
        await user.save();
        await album[0].save()
        console.log("albunm = ", album[0])
        res.status(200).redirect('/post/gallery');
    })

})

router.get('/:id',  (req,res)=>{
    Album.findById(req.params.id).populate({
        path : "posts",
          populate: [{
            path: "video",
          }, {path: "user"
        }]
    }).then( found =>{
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

router.delete('/delete/:id', (req,res)=>{
    Album.findById(req.params.id).populate('user').then( async found =>{
        let user = req.user;
        if (user) {
            if (user.id != found.user.id) {
              throw new Error('You are not the owner of this post');
            }
          } else {
            throw new Error("You need to login to delete posts");
          }

          user.albums = user.albums.filter((album) => {
            return album.id != found.id;
          });

          await user.save();

          return found.remove();
    }).then(removed => {
        res.status(204).end();
    }).catch((err) => {
      if(err.name == "CastError") {
        res.status(404).render('/profile/profile.html');
      } else {
        res.status(500).render("/profile/profile.html");
      }
    });
})




module.exports = router;