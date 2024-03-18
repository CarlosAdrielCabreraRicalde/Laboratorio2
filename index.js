const express=require('express')
const app = express()
const routes=require('./rutas.js')
const port = 3100

app.use(routes) //app.use('usuarios',routes)

app.listen(port, ()=>{
    console.log('Server on port ${3000}')
})

app.get('/', (req,res)=>{
    res.sendFile('./static/index.html', {
        root:__dirname
    })
})

app.listen(3000)
console.log('Server on port ${3000}')