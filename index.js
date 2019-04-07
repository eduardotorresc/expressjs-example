const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes')

// Settings
app.set('appName', 'Mi primer server')
app.set('view engine', 'ejs')

// Middelwares
app.use(morgan('combined'))
app.use('/assets', express.static('assets'));
// app.use('/css', express.static('css'));

// Rutas
app.use(routes)

app.listen(3000, function () {
    console.log('Servidor funcionando en http://localhost:3000')
    console.log('Nombre de la app: ' + app.get('appName'))
})