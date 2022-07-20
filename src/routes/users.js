// ROUTES

// express tiene un constructor llamado router
const express = require('express');
const user = require('../models/user');
const userSchema = require('../models/user')
const router = express.Router();
// now we define routes

// create users 
router.post('/users', (req, res) => {
    // recibimos el objeto de la peticion que tiene un body
const use = userSchema(req.body)
user.save().then((data) => {res.json(data)})
})


module.exports = router;