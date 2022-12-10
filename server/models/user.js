const mongoose = require('mongoose')
const express = require('express')

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = mongoose.Schema(
   [
         {
          id: {
            type: Number
          },
          description: {type: String,
            required: true,
        },
        price: {type: String,
            required: true
        },
        img:{
            type: String,
            required: true,
        },
        }]
      
    )

const userSchema2 = mongoose.Schema({
        description: {type: String,
            required: true,
        },
        price: {type: String,
            required: true
        },
        image:{
            type: String,
            required: true,
        },
    
})
// We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = mongoose.model('user', userSchema)
