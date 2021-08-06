const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')

app.use(ejsLayouts)



app.get('/',(req, res)=>{
    res.render('index.ejs', {name: 'Aman', age: 30})
})
app.use('/loveit',require('./controllers/loveit'))
app.use('/leaveit',require('./controllers/leaveit'))





app.listen('4000')