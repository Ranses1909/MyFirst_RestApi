const express = require('express');
const mongoose = require('mongoose');
// with this you are already able to create your own enviromental variables inside .env
require('dotenv').config()
const userRoutes = require('./routes/users');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 9000

// middlewares
// este middleware es para transformar el body requested to a javascript object
app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);

// PRIMERO SE ESCRIBE REQ, Y DESPUES RES MAMAGUEVOOOOOOOOOOOOOO
app.get('/', (req,res ) => {
    res.send('SIIIIIIIIIIUUUUUUUU')
})
// mongodb connection can return a promise...
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB Atlas')).catch((error) => console.error(error))


app.listen(port, ()=> console.log('listening on server', port))