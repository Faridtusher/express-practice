const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'
const adminRouter = require('./router/admin.route')
const customerRoute = require('./router/customer.route')
const jsonRoute = require('./router/json.route')



// ******* Route of another pages **********
app.use('/admin', adminRouter)
app.use(customerRoute)
app.use('/json', jsonRoute)

// ******* Route of another pages **********



// ******* Route of home page and not found page **********
app.get('/', (req, res) =>{
   res.statusCode = 200
   res.sendFile(__dirname+"/views/index.html")
})

app.get('/special', (req, res) => {
   res.cookie('Name', 'Farid')
   res.cookie('Age', '27')
   res.clearCookie('Age')
   res.header('Name', 'Dima')
   res.end()
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