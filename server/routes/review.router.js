var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config()
var request = require('request');
var GiantBomb = require('giant-bomb');
var api = process.env.API_key;
var agent = 'alexprimeproj'
var gb = new GiantBomb(api, agent);
var pool = require('../modules/pool.js');



router.post('/', function (req, res) {
    var rev = req.body;
    console.log(rev);
    
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'INSERT INTO "reviews" ("user_id","game", "title" , "score", "text", "link") VALUES ($1, $2, $3 , $4, $5, $6 );';
            db.query(queryText, [rev.id,rev.game, rev.score, rev.title, rev.text, rev.link], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            }); // END QUERY
        }
    });
});//End POST route






module.exports = router;