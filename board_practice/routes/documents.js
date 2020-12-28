const express = require('express');
const Document = require('../schemas/document');

const router = express.Router();

router.route('/')
  .post(async (req, res, next) => {
    try {
      const document = await Document.create({
        title: req.body.title,
        user: req.body.user,
        content: req.body.content,
      });
      console.log(document);
      res.status(201).json(document);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

// router.route('/:id')
//   .patch(async (req, res, next) => {
//     try {
//       const result = await Document.update({
//         _id: req.params.id,
//       }, {
//         document: req.body.document,
//       });
//       res.json(result);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   })
//   .delete(async (req, res, next) => {
//     try {
//       const result = await Comment.remove({ _id: req.params.id });
//       res.json(result);
//     } catch (err) {
//       console.error(err);
//       next(err);
//     }
//   });
module.exports = router;