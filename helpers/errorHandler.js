const createPath = require("./create-path");


const errorHandler = (res, e) => {
  console.log(e);
  res.render(createPath('error'), {title: 'Error'});
}

module.exports = errorHandler;