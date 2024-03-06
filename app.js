const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'
const adminRouter = require('./router/admin.route')
const customerRoute = require('./router/customer.route')
const jsonRoute = require('./router/json.route')
const myApp = require('./request/request')



// ******* Route of another pages **********
app.use('/admin', adminRouter)
app.use(customerRoute)
app.use('/json', jsonRoute)
app.use(myApp)

// ******* Route of another pages **********



// ******* Route of home page and not found page **********
app.get('/', (req, res) =>{
   res.statusCode = 200
   res.send('This is home page')
})

app.get('/special', (req, res) => {
   res.cookie('Name', 'Farid')
   res.cookie('Age', '27')
   res.clearCookie('Age')
   res.header('Name', 'Dima')
   res.end()
})

app.get('/login', (req, res) =>{
   res.sendFile(__dirname+'/views/index.html')
})

app.post('/login', (req, res)=>{
   const name = req.body.name;
   const age = req.body.age;
   res.send(`My name is ${name} i am ${age} years old.`)
})



app.use((req, res) =>{
   res.send('404!!!Not found')
})


// ******* Route of home page and not found page **********


// create the server
module.exports = {
   app, 
   port, 
   hostname
}