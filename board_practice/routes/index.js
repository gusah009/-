var express = require('express');
const Document = require('../schemas/document');

var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const documents = await Document.find({});
    res.render('noticeBoard', { documents });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/about', function(req, res){
  res.render('home/about');
});

module.exports = router;