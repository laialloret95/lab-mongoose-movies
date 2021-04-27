const mongoose = require('mongoose');
const Celebrity = require('../models/Celebritiy');
const Movie = require('../models/Movie');

// ℹ️ Connects to the database
require("../db");

// 📸 Populate Celebrities

// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: 'actor',
//     catchPhrase: 'aloha baby'
//   },
//   {
//     name: 'Beyonce',
//     occupation: 'singer',
//     catchPhrase: 'hola bonito'
//   },
//   {
//     name: 'Daffy Duck',
//     occupation: 'comedian',
//     catchPhrase: 'hakuna matata'
//   }
// ]

// Celebrity.create(celebrities)
//   .then((celebritiesDB) => {
//     console.log(`Created ${celebritiesDB.length} celebrities`);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log('error', err))

// 🎬 Populate Movies

const movies = [
  {
    title: 'Avatar',
    genre: 'action',
    plot: 'New creatures in new planet'
  },
  {
    title: 'El Zorro',
    genre: 'action',
    plot: 'Character who saves the population'
  },
  {
    title: 'Hangover',
    genre: 'comedie',
    plot: 'Hangover in Las Vegas'
  }
]

Movie.create(movies)
  .then(movies => {
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('error', err)
  })