const Celebrity = require("../models/Celebritiy");
const router = require("express").Router();

router.get("/celebrities", (req,res) => {
  Celebrity.find()
  .then(celebritiesDB => {
    res.render('celebrities/index', { celebrities: celebritiesDB })
  })
  .catch(err => console.log('error', err))
})

router.get("/celebrities/:id", (req, res) => {
  const {id} = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => { console.log('error', err) })
})

module.exports = router;
