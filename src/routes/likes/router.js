const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/post');
require('../../models/user');
require('../../models/video');
const Post = mongoose.model('Post');
const Video = mongoose.model('Video');
const fetch = require('node-fetch');

router.post('/' , (req, res) => {


});
