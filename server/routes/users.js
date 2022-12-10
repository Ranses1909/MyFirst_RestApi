// ROUTES

// express tiene un constructor llamado router
const express = require('express');
const user = require('../models/user');
const {arrayData } = require('../models/user');
const userSchema = require('../models/user')
const router = express.Router();
const app = express();
// now we define routes
const actualSchema = {...userSchema.arrayData}
app.get('/', )

// create users 
router.post('/users', (req, res) => {
    // recibimos el objeto de la peticion que tiene un body
const user = userSchema(req.body)
user.save()
.then((data) => {res.json(data)})
.catch(console.log((err) => res.json({message: err})))
})

// get all users
router.get('/users', (req, res) => {
    // recibimos el objeto de la peticion que tiene un body
    // const {arrayData} = req.params
userSchema
// instead of saving we're gonna find all users
.find()
.then((data) => {res.json(data)})
.catch((err) => res.json({message: err}))
})

// KEEP READING
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#http_verbs

// get one user
router.get('/users/:id', (req, res) => {
    // const query = UserSchema.find().then((data) => {res.json(data[0].arrayData)})
    // here we will fin the id we need, that id it's gonna be inside the params that come from the petition
    const { id } = req.params;
   userSchema
   .find()
        .where("_id").equals(id)
        .then((data) => {res.json(data)})
    .catch((err) => res.json({message: err}))
})

// update one user
router.put('/users/:id', (req, res) => {
    const data = req.params;
    // data[0].arrayData.id
    // we pull up whose data we want to update from the body
    const {description, price, img} = req.body;
 userSchema
//  this metod receive  2 params (2 objects) one with id and another with something like a set from useState that needs ($set)
 .updateOne({_id:id}, {$set: {description,price,img}})
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

