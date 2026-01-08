const express = require('express');
const router = express.Router();
const {getPeople, createPerson} = require('../controllers/people');

//we can use this router to define routes related to people
router.get('/',   getPeople);
router.post('/', createPerson);

//we can use below chain routing as well
// router.route('/').get(getPeople).post(createPerson);

module.exports = router;