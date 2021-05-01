const http = require('http')
const bodyParser = require('body-parser')


const path = require('path')

const express = require('express');

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')


const app = express();

app.use(express.static(path.join(__dirname, 'public'))) // allows to set static files i.e files that go direct to the file system 

app.use(bodyParser.urlencoded({extended: false})); // to user body parser

app.use(usersRoutes)

app.use(homeRoutes)


app.use((req, res) => {
    res.status(404).send("<h1>page not found</h1>")
})




const server = http.createServer(app)


server.listen(3000)