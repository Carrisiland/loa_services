// vim: set ts=2 sw=2 et tw=80:
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
require('../../models/comment');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const Comment = mongoose.model('Comment');
const fetch = require('node-fetch');

router.post('/comment/up/:id' , (req, res) => {
  Comment.findById(req.params.id).populate('likersUp').populate('likersDown').then((comment) => {
    if(req.user == undefined) {
      return comment;
    }
    const userId = req.user.id;
    let foundUp = undefined;
    let foundDown = undefined;
    for(i in comment.likersUp) {
      if (userId == comment.likersUp[i].id) {
        foundUp = comment.likersUp[i].id;
      }
    }
    for(i in comment.likersDown) {
      if (userId == comment.likersDown[i].id) {
        foundDown = comment.likersDown[i].id;
      }
    }
    if (foundUp == undefined && foundDown == undefined) {
      comment.upvotes +=1;
      comment.likersUp.push(req.user);
    } else if (foundDown == undefined) {
      comment.upvotes -=1;
      comment.likersUp = comment.likersUp.filter((user) => {
        return user.id != userId;
      });
    } else if (foundUp == undefined) {
      comment.downvotes -=1;
      comment.upvotes +=1;
      comment.likersUp.push(req.user);
      comment.likersDown = comment.likersDown.filter((user) => {
        return user.id != userId;
      });
    }
    return comment.save();
  }).then((saved) => {
    res.status(200);
    res.end();
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});



router.post('/comment/down/:id' , (req, res) => {
  Comment.findById(req.params.id).populate('likersUp').populate('likersDown').then((comment) => {
    if(req.user == undefined) {
      return comment;
    }
    const userId = req.user.id;
    let foundUp = undefined;
    let foundDown = undefined;
    for(i in comment.likersUp) {
      if (userId == comment.likersUp[i].id) {
        foundUp = comment.likersUp[i].id;
      }
    }
    for(i in comment.likersDown) {
      if (userId == comment.likersDown[i].id) {
        foundDown = comment.likersDown[i].id;
      }
    }
    if (foundUp == undefined && foundDown == undefined) {
      comment.downvotes +=1;
      comment.likersDown.push(req.user);
    } else if (foundUp == undefined) {
      comment.downvotes -=1;
      comment.likersDown = comment.likersDown.filter((user) => {
        return user.id != userId;
      });
    } else if (foundDown == undefined) {
      comment.downvotes +=1;
      comment.upvotes -=1;
      comment.likersDown.push(req.user);
      comment.likersUp = comment.likersUp.filter((user) => {
        return user.id != userId;
      });
    }
    return comment.save();
  }).then((saved) => {
    res.status(200);
    res.end();
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});



router.post('/post/up/:id' , (req, res) => {
  Post.findById(req.params.id).populate('likersUp').populate('likersDown').then((post) => {
    if(req.user == undefined) {
      return post;
    }

    // console.log(post);
    const userId = req.user.id;
    let foundUp = undefined;
    let foundDown = undefined;
    for(i in post.likersUp) {
      if (userId == post.likersUp[i].id) {
        foundUp = post.likersUp[i].id;
      }
    }
    for(i in post.likersDown) {
      if (userId == post.likersDown[i].id) {
        foundDown = post.likersDown[i].id;
      }
    }
    if (foundUp == undefined && foundDown == undefined) {
      post.upvotes +=1;
      post.likersUp.push(req.user);
    } else if (foundDown == undefined) {
      post.upvotes -=1;
      post.likersUp = post.likersUp.filter((user) => {
        return user.id != userId;
      });
    } else if (foundUp == undefined) {
      post.downvotes -=1;
      post.upvotes +=1;
      post.likersUp.push(req.user);
      post.likersDown = post.likersDown.filter((user) => {
        return user.id != userId;
      });
    }
    return post.save();
  }).then((saved) => {
    res.status(200);
    res.redirect('/post/' + req.params.id);
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});

router.post('/post/down/:id' , (req, res) => {
  Post.findById(req.params.id).populate('likersUp').populate('likersDown').then((post) => {
    if(req.user == undefined) {
      return post;
    }
    const userId = req.user.id;
    let foundUp = undefined;
    let foundDown = undefined;
    for(i in post.likersUp) {
      if (userId == post.likersUp[i].id) {
        foundUp = post.likersUp[i].id;
      }
    }
    for(i in post.likersDown) {
      if (userId == post.likersDown[i].id) {
        foundDown = post.likersDown[i].id;
      }
    }
    if (foundUp == undefined && foundDown == undefined) {
      post.downvotes +=1;
      post.likersDown.push(req.user);
    } else if (foundUp == undefined) {
      post.downvotes -=1;
      post.likersDown = post.likersDown.filter((user) => {
        return user.id != userId;
      });
    } else if (foundDown == undefined) {
      post.downvotes +=1;
      post.upvotes -=1;
      post.likersDown.push(req.user);
      post.likersUp = post.likersUp.filter((user) => {
        return user.id != userId;
      });
    }
    return post.save();
  }).then((saved) => {
    res.status(200);
    res.redirect('/post/' + req.params.id);
  }).catch((err) => {
    res.flash('error', err.toString());
    res.status(500).render('gallery.html');
  });
});

module.exports = router;
