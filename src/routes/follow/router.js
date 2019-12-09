const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
const User = mongoose.model("User");
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Comment = mongoose.model('Comment');
const { check, validationResult, sanitize } = require('express-validator');
const fetch = require('node-fetch');


router.get('/feed', (req, res) => {
    let user = req.user;
    User.findById(user.id).populate({
      path : "following", 
      populate: [{
        path: "posts",
        populate: [{
          path: "video",
        },
         {path: "user"
        }]
      }]
    }).then(user =>{
      console.log ("user= ", user.following)
      let postArr = [];
      for (i in user.following){
        for(j in user.following[i].posts){
          postArr.push(user.following[i].posts[j])
        }
      }
      console.log('arr = ', postArr)
      res.render('feed.html', {posts: postArr});
      });
    });

router.post("/:id",  (req, res)=>{
    User.findById(req.params.id).populate("followers").then(async (followedUser)=>{
        const userId = req.user.id;
        const user = await User.findById(req.user.id).populate("following");
        let found = undefined;
        for (i in followedUser.followers){
            if (userId == followedUser.followers[i].id) {
                found = followedUser.followers[i].id;
              }
        }
        if (found == undefined){
            followedUser.followers.push(req.user);
            user.following.push(followedUser);
        } else{
            followedUser.followers = followedUser.followers.filter((follower) => {
                return follower.id != userId;
              });
            user.following = user.following.filter((followingUser)=>{
              console.log("following = ", followingUser.id )
              console.log("followed = ", followedUser.id )
              console.log("remove=", followingUser.id != followedUser.id)
                return followingUser.id != followedUser.id;
            });
        }
         
         await user.save();
         return followedUser.save(); ;
    }).then((followed) => {
        res.status(200).redirect('/profile/'+ followed.id);
        res.end();
      }).catch((err) => {
        console.log('error = ',err)
        // res.flash('error', err.toString());
        res.status(500).render('feed.html');
    });

});



module.exports = router;
