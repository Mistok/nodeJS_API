const express = require('express');

const router = express.Router();

const {getPost, editPost_edit, editPost_get, deletePost, getPosts, addPostPage_Add, addPostPage_Get} = require('../controllers/post-controllers');

router.get('/posts/:id', getPost);

router.put('/edit/:id', editPost_edit);

router.delete('/posts/:id', deletePost);

router.get('/posts', getPosts);

router.post('/add-post', addPostPage_Add);

router.get('/add-post', addPostPage_Get);

router.get('/edit/:id', editPost_get);

module.exports = router;
