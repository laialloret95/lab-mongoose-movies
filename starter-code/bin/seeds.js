const mongoose = require('mongoose');
const Celebrity = require('../models/Celebritiy');

// ℹ️ Connects to the database
require("../db");

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'aloha baby'
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'hola bonito'
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'hakuna matata'
  }
]

Celebrity.create(celebrities)
  .then((celebritiesDB) => {
    console.log(`Created ${celebritiesDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log('error', err))