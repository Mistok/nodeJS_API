// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const createPath = require("./helpers/create-path");
//
// const postRoutes = require('./routes/post-routes');
// const contactsRoutes = require('./routes/contact-routes');
//
// const app = express();
//
// app.set('view engine', 'ejs');
//
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
//
// app.use(express.static('styles'));
//
// app.use(methodOverride('_method'));
//
// app.use(express.urlencoded({extended: false}));
//
// app.use(postRoutes);
//
// app.use(contactsRoutes);
//
// const PORT = 5001;
//
// const db = "mongodb+srv://mistok:QWEqwe123@cluster0.dlarx.mongodb.net/?retryWrites=true&w=majority";
//
// mongoose
//   .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then((res) => console.log('connected to Mongo DB' + res))
//   .catch((e) => console.log(e));
//
//
// app.listen(PORT, (error) => {
//   error ? console.error(error) : console.log(`app is listening on port ${PORT}`);
// });
//
// app.get('/', (req, res) => {
//   const title = 'home';
//   res.render(createPath('index'), {title}, );
// });
//
// app.use((req, res) => {
//   const title = 'Error';
//   res.status(404).render(createPath('error'), {title});
// });