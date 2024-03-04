const express = require('express');
const customerRoute = express.Router();

customerRoute.route('/customer')
.all((req, res, next) =>{
   console.log('This is the customer route ')
   next();
})
.get((req, res) =>{
   res.send('customer get')
})
.post((req, res) =>{
   res.send('customer post')
})
.put((req, res) =>{
   res.send('customer put')
})
.delete((req, res) =>{
   res.send('customer delete')
})

// export the module
module.exports = customerRoute
