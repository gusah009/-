const express = require('express');
const Document = require('../schemas/document');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const id = req.params.id;
    const document = await Document.find({_id:id});
    console.log(document);
    res.render('list', { document });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/:id')
  .get(async function(req, res, next) {
    try {
      var id = req.params.id;
      const document = await Document.findOne({_id:id});
      document.views++;
      document.save();
      console.log(document);
      res.render('list', { document });
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  // .patch(async (req, res, next) => {
  //   try {
  //     const result = await Document.update({
  //       _id: req.params.id,
  //     }, {
  //       document: req.body.document,
  //     });
  //     res.json(result);
  //   } catch (err) {
  //     console.error(err);
  //     next(err);
  //   }
  // })

module.exports = router;