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

router.post("/movies/:id", (req,res) => {
  const { title, genre, plot } = req.body;
  const { id } = req.params;

  Movie.findByIdAndUpdate(id, { title, genre, plot}, {new: true})
    .then(() => {
      res.redirect("/movies")
    })
    .catch(err => console.log('error', err))
})

router.post("/movies/:id/delete", (req,res) => {
  const { id } = req.params
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/movies")
    })
    .catch(err => console.log('error', err))
})

router.get("/movies/:id/edit", (req, res) => {
  const { id } = req.params
  Movie.findById(id)
    .then(movie => {
      res.render("movies/edit", movie);
    })
    .catch(err => console.log('error', err))
})

module.exports = router;
