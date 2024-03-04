const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/', (req, res) =>{
   res.send('<h2>Admin home</h2>')
})

adminRouter.get('/about', (req, res) =>{
   res.send('<h2>Admin About page</h2>')
})

adminRouter.get('/contact', (req, res) =>{
   res.send('<h2>Admin contact page</h2>')
})

adminRouter.post('/contact', (req, res) =>{
   res.send('<h2>Post admin contact</h2>')
})



module.exports = adminRouter;

