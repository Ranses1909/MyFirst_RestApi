const mongoose = require('mongoose')
const express = require('express')

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = mongoose.Schema({
    name:{type: String,
        required: true,
    },
    profession: String,
    age: {type: Number,
    required: true
    },
    email:{
    type: String,
    required: true,
    } 
})

// We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = mongoose.model('user', userSchema)