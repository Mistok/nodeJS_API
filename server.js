const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const createPath = require("./helpers/create-path");
require('dotenv').config();
const postRoutes = require('./routes/post-routes');
const contactsRoutes = require('./routes/contact-routes');
const postApiRoutes = require('./routes/api-post-routes');
const chalk = require("chalk");

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const app = express();

app.set('view engine', 'ejs');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: false}));

app.use(postRoutes);

app.use(contactsRoutes);

app.use(postApiRoutes);

// const PORT = 5001;
//
// const db = "mongodb+srv://mistok:QWEqwe123@cluster0.dlarx.mongodb.net/?retryWrites=true&w=majority";
console.log(process.env.MONGO_URL)
console.log(process.env.PORT)
mongoose
  .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log(successMsg('connected to Mongo DB' )))
  .catch((e) => console.log(errorMsg(e)));


app.listen(process.env.PORT, (error) => {
  error ? console.error(errorMsg(error)) : console.log(successMsg(`app is listening on port ${process.env.PORT}`));
});

app.get('/', (req, res) => {
  const title = 'home';
  res.render(createPath('index'), {title}, );
});

app.use((req, res) => {
  const title = 'Error';
  res.status(404).render(createPath('error'), {title});
});