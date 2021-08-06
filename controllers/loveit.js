const express = require('express')
const router = express.Router()
//app.get is changed into the router.get(we get router through invoking express router method)
router.get('/animals',(req, res)=>{
    res.render('animals.ejs',{animals: ['sandcrab', 'dogs', 'cats']})
})
//don't need to use /loveit/foods in parameter because it is taken care by the middleware app.use('/loveit',require(./contro.....))
router.get('/foods', (req, res)=>{
    res.render('foods.ejs', {foods : ['momo','pizza', 'aalutama']})
})

module.exports = router;