const express = require('express');
const myApp = express.Router(); 
const bodyParser = require('body-parser')



myApp.use(bodyParser.urlencoded({ extended: false }))
myApp.use(bodyParser.json())

myApp.post('/exampleRoute', (req, res) => {
   const {name, age} = req.body;
   res.send(`Received data in the request body. Your name is ${name} and your age is ${age}.`);
});

// usee the query object request
myApp.get('/app', (req, res) =>{

   const {name, id} = req.query;
   res.send(`My name is ${name} and my id is ${id}`)
})


// use the route parameter request
myApp.get('/userId/:id/userAge/:age', (req, res) =>{
   const {id, age} = req.params;
   res.send(`Your id is ${id} and age is ${age}.`)
   // console.log(id)
})


// use the header parameter request
myApp.use('/headerTest', (req, res) =>{
   const {age, name} = req.headers;
   res.send(`Your name is ${name} and your age is ${age}.`)
})




module.exports = myApp;