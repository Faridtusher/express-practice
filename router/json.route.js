const express = require('express');
const jsonRoute = express.Router();


jsonRoute.get('/', (req, res) =>{
   res.status(200).json({
      name:'Faridul',
      Class:'5',
      statusCode:200
   })
   // res.redirect('/json/login')
})

jsonRoute.get('/login', (req, res) =>{
   res.send('This is the json login page')
})



module.exports = jsonRoute;