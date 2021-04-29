const Movie = require("../models/Movie");
const router = require("express").Router();

router.get("/movies", (req,res) => {
  Movie.find()
    .then(movies => {
      res.render('movies/index', {movies})
    })
    .catch(err => console.log('error', err))
})

router.post("/movies", (req,res) => {
  const {title, genre, plot} = req.body
  Movie.create({title, genre, plot})
    .then(()=> {
      res.redirect("/movies")
    })
    .catch(err => { console.log(err) })
})

router.get("/movies/new", (req,res) => {
  res.render("movies/new")
})

router.get("/movies/:id", (req,res) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      console.log(movie)
      res.render('movies/show', movie)
    })
    .catch(err => console.log('error', err))
})


module.exports = router;
