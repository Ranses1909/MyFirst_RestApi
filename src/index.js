const express = require('express');

const app = express();
const port = process.env.PORT || 9000

// PRIMERO SE ESCRIBE REQ, Y DESPUES RES MAMAGUEVOOOOOOOOOOOOOO
app.get('/', (req,res ) => {
    res.send('SIIIIIIIIIIUUUUUUUU')
})
// mongodb connection
mongoose.connect(port)
app.listen(port, ()=> console.log('listening on server', port))