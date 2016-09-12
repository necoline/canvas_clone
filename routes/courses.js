var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Course = require('../models/course');


router.get('/', (req, res) => {
  Course.find( (err, courses) => {
    res.json(courses);
  });
});

router.post('/', (req, res) => {
  new Course({
    name: req.body.name,
    instructor: req.body.instructor,
    credits: req.body.credits,
    description: req.body.description
  }).save( (err, course) => {
    res.json(course);
  });
});

router.get('/:id', (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    res.json(course);
  });
});

module.exports = router;
