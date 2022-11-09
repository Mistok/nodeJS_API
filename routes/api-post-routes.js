const express = require('express');

const router = express.Router();

const {
  getPost,
  editPost_edit,
  editPost_get,
  deletePost,
  getPosts,
  addPostPage_Add,
  addPostPage_Get
} = require('../controllers/api-post-controllers');

// Get all posts
router.get('/api/posts', getPosts);

// Add New Post
router.post('/api/post', addPostPage_Add);
// Get Post by ID
router.get('/api/post/:id', getPost);
// Delete Post by ID
router.delete('/api/post/:id', deletePost);
// Update Post by ID
router.put('/api/post/:id', editPost_edit);


// router.get('/posts/:id', getPost);
//
// router.post('/add-post', addPostPage_Add);
//
// router.get('/add-post', addPostPage_Get);
//
// router.get('/edit/:id', editPost_get);

module.exports = router;
