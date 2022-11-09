const createPath = require("../helpers/create-path");
const Contacts = require("../models/contacts");

const getContacts = (req, res) => {
  const title = 'Contacts';
  Contacts
    .find()
    .then((contacts) => res.render(createPath('contacts'), {contacts, title}))
    .catch((e) => {
      console.log(e);
      res.render(createPath('error'), {title: 'Error'});
    })
}

module.exports = {getContacts};