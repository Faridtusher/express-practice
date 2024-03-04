const {app, port, hostname} = require('./app')

app.listen(port, hostname, () =>{
   console.log(`Your server is running : http://${hostname}:${port}`)
})

