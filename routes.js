const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/cupon', (req, res) => {
    res.render('solicitar-cupon.ejs')
})

router.get('/registrar', (req, res) => {
    res.render('registrar-gimnasios.ejs')
})

router.get('*', (req, res) => {
    res.end('Archivo no encontrado')
})

module.exports = router