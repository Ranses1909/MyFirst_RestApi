const mongoose = require('mongoose')
const express = require('express')

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = mongoose.schema({
    nombre: String,
    age: Number,
    email:{ String,
    requerido:true,
    } 
})

// We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = Mongoose.model('user', userSchema)