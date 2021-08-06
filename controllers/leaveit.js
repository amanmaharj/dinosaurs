//controllers help to separate the different routes according to the url route for example in this scenerio leaveit and loveit are the two url we can see

const express = require('express')

const router = express.Router();

router.get('/movies',(req, res)=>{
    res.render('movies.ejs',{movies : ['titanic', 'alibaba', 'talespin']})
})

module.exports = router;