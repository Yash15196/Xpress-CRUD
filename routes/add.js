/*let add=require("../user");*/
let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
/*let db = ('mongodb://localhost/firstapp')*/
/*mongoose.connect(db);*/

mongoose.connect('mongodb://localhost/firstapp')

const user = require('../models/user')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))


router.get('/',(req, res)=> {
    user.find({})
        .exec((err, emp) => {
            if (err)
                res.send("error")
            else
                res.json(emp)
        })
});


router.post('/',(req, res)=> {
    user.create(req.body).then(function(data) {
        res.send(data);

    });


});
// let user = new User(req.body);
// user.save((err, data) => {
// 	res.send('succe


router.put('/update/:id',(req, res)=> {
    user.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        user.findOne({ _id: req.params.id }).then(function(data) {
            res.send(data);
        });
    });
});


router.delete('/delete/:id',(req, res)=> {

   user.findByIdAndRemove({ _id: req.params.id }).then(function(data) {

       res.send(data);

   });});

module.exports = router;