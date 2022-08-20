// ROUTES

// express tiene un constructor llamado router
const express = require('express');
// const user = require('../models/user');
const userSchema = require('../models/user')
const router = express.Router();
// now we define routes

// create users 
router.post('/users', (req, res) => {
    // recibimos el objeto de la peticion que tiene un body
const user = userSchema(req.body)
user
.save()
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})


// get all users
router.get('/users', (req, res) => {
    // recibimos el objeto de la peticion que tiene un body
userSchema
// instead of saving we're gonna find all users
.find()
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})

// get one user
router.get('/users/:id', (req, res) => {
    // here we will fin the id we need, that id it's gonna be inside the params that comes from the petition
    const { id } = req.params;
    userSchema
// instead of saving we're gonna find all users
.findById(id)
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})

// update one user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    // we pull up whose data we want to update from the body
    const {name,age,email} = req.body;
 userSchema
//  this metod receive  2 params (2 objects) one with id and another with something like a set from useState that needs ($set)
 .updateOne({_id:id}, {$set: {name,age,email}})
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})
    
router.delete('/users/:id', (req, res) =>{
    const { id } = req.params;
userSchema
.remove({_id:id})
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})
module.exports = router;

// api key
// cnrjiJT6duQrQXIsX9T4VGjDLBCvN7xSHduEx62TarBhlPLUKYOlq9sBQSaxTnbe