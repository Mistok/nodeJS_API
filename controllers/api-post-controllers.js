const Post = require("../models/post");
const errorHandler = require("../helpers/api-error-handler");

const getPosts = (req, res) => {
  Post
    .find()
    .sort({createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((e) => {
      console.log(e);
      // res.render(createPath('error'), {title: 'Error'});
    })
}

const getPost = (req, res) => {
  Post
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((e) => {
      console.log(e);
      // res.render(createPath('error'), {title: 'Error'});
    })
};

const addPostPage_Add = (req, res) => {
  const {title, author, text} = req.body;
  // const post = { id: new Date(), date: new Date().toLocaleDateString(), title, author, text,}
  // res.render(createPath('post'), {post, title});
  const post = new Post({ title, author, text});
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((e)=> {
      console.log(e)
      res.render(
        // createPath('error'), {title: 'Error'}
      )
    })
}

const editPost_edit = (req, res) => {
  const {title, author, text} = req.body;
  const { id } = req.params;
  Post
    .findByIdAndUpdate(req.params.id, {title, author, text}, {new: true})
    .then((post) => res.status(200).json(post))
    .catch((e) => errorHandler(res, e))
}

const deletePost = (req, res) => {
  Post
    .findByIdAndDelete(req.params.id)
    .then((post) => res.status(200).json(req.params.id))
    .catch((e) => {
      console.log(e);
      // res.render(createPath('error'), {title: 'Error'});
    })
}

module.exports = {
  getPost,
  editPost_edit,
  deletePost,
  getPosts,
  addPostPage_Add
};