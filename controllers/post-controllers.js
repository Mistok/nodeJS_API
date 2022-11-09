const Post = require("../models/post");
const createPath = require("../helpers/create-path");
const errorHandler = require("../helpers/errorHandler");

const getPosts = (req, res) => {
  const title = 'Posts';
  Post
    .find()
    .sort({createdAt: -1 })
    .then((posts) => {
      res.render(createPath('posts'), {title, posts})
    })
    .catch((e) => {
      console.log(e);
      res.render(createPath('error'), {title: 'Error'});
    })
}

const getPost = (req, res) => {
  const title = 'Post';
  Post
    .findById(req.params.id)
    .then((post) => {
      res.render(createPath('post'), {title, post})
    })
    .catch((e) => {
      console.log(e);
      res.render(createPath('error'), {title: 'Error'});
    })
};

const addPostPage_Add = (req, res) => {
  const {title, author, text} = req.body;
  // const post = { id: new Date(), date: new Date().toLocaleDateString(), title, author, text,}
  // res.render(createPath('post'), {post, title});
  const post = new Post({title, author, text});
  post
    .save()
    .then((result) => res.redirect('/posts'))
    .catch((e)=> {
      console.log(e)
      res.render(
        createPath('error'), {title: 'Error'}
      )
    })
}

const addPostPage_Get = (req, res) => {
  const title = 'Add post';
  res.render(createPath('add-post'), {title});
}

const editPost_edit = (req, res) => {
  const {title, author, text} = req.body;
  const { id } = req.params;
  Post
    .findByIdAndUpdate(req.params.id, {title, author, text})
    .then((result) => {
      res.redirect(`/posts/${id}`)
    })
    .catch((e) => errorHandler(res, e))
}
const editPost_get = (req, res) => {
  const title = 'Edit Post';
  Post
    .findById(req.params.id)
    .then((post) => {
      res.render(createPath('edit-post'), {title, post})
    })
    .catch((e) => errorHandler(res, e))
}

const deletePost = (req, res) => {
  Post
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((e) => {
      console.log(e);
      res.render(createPath('error'), {title: 'Error'});
    })
}


module.exports = {
  getPost,
  editPost_edit,
  editPost_get,
  deletePost,
  getPosts,
  addPostPage_Get,
  addPostPage_Add
};