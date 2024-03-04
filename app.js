// const express = require('express');
// const app = express();
// // const port = 3000
// const hostname = '127.0.0.1'
// const router = require('./routes/users.route')

// app.use( "/api/user",router)
// app.use('/admin', adminRouter)
// app.use('/public', publicRouter)
// app.use(faridRouter)


// app.get('/', (req, res) => {
//    res.send('<h1>This is the home page</h1>')
// })

// app.use((req, res) =>{
//    res.send('<h1>404!!!not found</h1>')
// })


// module.exports = {
//    app,
//    port, hostname
// }


const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'


app.get('/', (req, res) =>{
   res.send('Hello world')
})

app.use((req, res) =>{
   res.send('404!!!Not found')
})



// create the server
module.exports = {
   app, 
   port, 
   hostname
}