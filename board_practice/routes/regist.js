const express = require('express');
const Document = require('../schemas/document');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const id = req.params.id;
    const document = await Document.find({_id:id});
    console.log(document);
    res.render('registBoard', { document });
  } catch (err) {
    console.error(err);
    next(err);
  }
});


module.exports = router;