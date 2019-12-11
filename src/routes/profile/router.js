const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const User = mongoose.model('User');
const Post = mongoose.model('Post');

router.get('/all', (req, res) => {

  User.findById(req.user._id).populate({
    path: "posts",
    populate: [{
      path: "video",
      model: "Video",
    }, {
      path: 'user',
      model: 'User',
    }]
  })
  .then((user) => {

    res.status(200).json(user.posts);

  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});

router.get('/public', (req, res) => {

  User.findById(req.user._id).populate({
    path: "posts",
    populate: [{
      path: "video",
      model: "Video",
    }, {
      path: 'user',
      model: 'User',
    }]
  })
  .then((user) => {
    let ps = user.posts.filter((post) => {
      return post.visibility == "public";
    });
      res.status(200).json(ps);
  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});

router.get('/private', (req, res) => {
  User.findById(req.user._id).populate({
    path: "posts",
    populate: [{
      path: "video",
      model: "Video",
    }, {
      path: 'user',
      model: 'User',
    }]
  })
  .then((user) => {
    let ps = user.posts.filter((post) => {
      return post.visibility == "private";
    });
      res.status(200).json(ps);

  }).catch(err => {
    console.error(err);
    req.flash('error', err.toString());
    res.render('profile/profile.html');
  });
});


router.get('/:id', (req, res) => {
  User.findById(req.params.id).populate({
    path: 'posts',
    populate: [{
      path: 'video',
      model: 'Video'
    }, {
      path: 'user',
      model: 'User',
    }]
  }).then(user => res.render('profile/profile.html',
    { profileUser: user, posts: user.posts }))
    .catch(err => {
      console.error(err);
      req.flash('error', err.toString());
      res.render('profile/profile.html');
    });
});
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('following').populate('followers');
  console.log("user: ", user);
  
  res.render('profile/editProfileForm.html', {user});
});

router.patch('/edit/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.username = req.body.username;
    await user.save();
    res.redirect('/profile/' + user.id);
  } catch(e) {
    console.error(e);
    res.status(500).render('/profile/' + user.id);
  }


});
module.exports = router;
