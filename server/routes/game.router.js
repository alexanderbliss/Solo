var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config()
var request = require('request');
var GiantBomb = require('giant-bomb');
var api = process.env.API_key;
var agent = 'alexprimeproj'
var gb = new GiantBomb( api , agent );




router.get('/', function (req, res) {
    console.log('request for index');
    console.log(req.query.name);
    var search = req.query.name
    gb.search({ query: search, fields: ['name'], limit: 10, resources: ['game'] },
        function (error, response, body) {
            
            if (!error && response.statusCode == 200) {
                body.results.forEach(game => {
                }).then(res.send(game.name))
            }
            res.send(game.name);
        }
    );
    
});


module.exports = router;
