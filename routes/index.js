const express = require('express');
const router = express.Router();
const { projects } = require('./../data/data.json');

   // index GET route
router.get('/', (req, res) => {
   res.render('index', { projects });
});
   // /about GET route
router.get('/about', (req, res) => {
   res.render('about');
});

   // project GET dinamic route
router.get('/project/:id', (req, res) => {
   const { id } = req.params;
   const project = projects[id];
   res.render('project', { project });
});

module.exports = router;
