const Celebrity = require("../models/Celebritiy");
const router = require("express").Router();

router.get("/celebrities", (req,res) => {
  Celebrity.find()
  .then(celebritiesDB => {
    res.render('celebrities/index', { celebrities: celebritiesDB })
  })
  .catch(err => console.log('error', err))
})

router.get("/celebrities/new", (req,res) => {
  res.render('celebrities/new');
})

router.get("/celebrities/:id", (req, res) => {
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => { console.log('error', err) })
});

router.post("/celebrities", (req,res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPrhase})
    .then(celebrityDB => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      res.redirect("/celebrities/new");
      console.log('error', err)})
})

router.post("/celebrities/:id/delete", (req,res) => {
  const { id } = req.params
  Celebrity.findByIdAndDelete(id)
    .then(celebrity => {
      console.log(`We just killed ${celebrity}`)
      res.redirect('/celebrities')
    })
    .catch(err => { console.log(err) })
})

router.get("/celebrities/:id/edit", (req, res) => {
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      console.log(celebrity)
      res.render('celebrities/edit', celebrity)
    })
    .catch(err => { console.log('error', err) })
})

module.exports = router;
