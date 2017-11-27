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
            var queryText = 'INSERT INTO "reviews" ("user_id","game", "score","title", "text", "link") VALUES ($1, $2, $3 , $4, $5, $6 );';
            db.query(queryText, [rev.id, rev.game, rev.score, rev.title, rev.text, rev.link], function (errorMakingQuery, result) {
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

router.get('/reviews/:id', function (req, res) {
    var user = req.user.id
    
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'SELECT "game", "id" , "title" FROM "reviews"  WHERE "user_id" = $1 ORDER BY "id" DESC;';
            db.query(queryText, [user], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                    
                }
            }); // END QUERY
        }
    });
});//END GET ROUTE


router.get('/:id', function (req, res) {
    var username = req.params.id
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'SELECT "id", "username", "real_name", "email", "role", "bio" FROM "users" WHERE "username" = $1 ;';
            db.query(queryText, [username], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); // END QUERY
        }
    });
});//END GET ROUTE

router.get('/thisReview/:id', function (req, res) {
    
    var reviewId = req.query.id
    var userId = req.query.rev
    console.log('req', reviewId, userId);
    
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'SELECT*FROM "reviews" Where  "user_id" = $1 and "id"= $2;'
            db.query(queryText, [reviewId , userId ], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); // END QUERY
        }
    });
});//END GET ROUTE

router.put('/:id', function (req, res) {
    console.log(req.body);
    var that = req.params.id
    var user = req.body
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'UPDATE "users" SET "username" = $1 , "real_name"= $2, "email" = $3, "bio"=$4 WHERE "username" = $5;'
            db.query(queryText, [user.username, user.realName, user.email, user.bio, that], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); // END QUERY
        }
    });
});//END GET ROUTE

router.get('/:id', function (req, res) {
    var username = req.params.id
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'SELECT "id", "username", "real_name", "email", "role", "bio" FROM "users" WHERE "username" = $1 ;';
            db.query(queryText, [username], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            }); // END QUERY
        }
    });
});//END GET ROUTE

router.post('/comment/:id', function (req, res) {
    console.log(req.params.id);
    console.log(req.query.comment);
    
    var id = req.params.id
    var comment = req.query
    pool.connect(function (errorConnectingToDb, db, done) {
        if (errorConnectingToDb) {
            console.log('Error connecting', errorConnectingToDb);
            res.sendStatus(500);
        } else {
            var queryText = 'INSERT INTO "comments" ("comment","review_id",) VALUES ($1, $2);';
            db.query(queryText, [], function (errorMakingQuery, result) {
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