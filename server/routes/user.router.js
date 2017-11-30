var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');
// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database    
    var userInfo = {
      username : req.user.username,
      userId : req.user.id,
      real_name : req.user.real_name,
      email : req.user.email,
      bio : req.user.bio,
    };
    res.send(userInfo);
    
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    res.send(false);
  }
});

router.get('/:id', function (req, res) {
  var username = req.params.id
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      var queryText = 'SELECT "id", "username", "real_name", "email", "role", "bio" FROM "users" WHERE "username" = $1 ;';
      db.query(queryText,[username], function (errorMakingQuery, result) {
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
// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.get('/reviewers/:id', function (req, res) {
  console.log('here');
  
  var username = req.params.id
  // var username = req.body.
  console.log(username);
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      var queryText = 'SELECT*FROM "users" WHERE "username" ILIKE $1 ;';
      db.query(queryText, [username], function (errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Error making query', errorMakingQuery);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.send(result.rows);
        }
      }); // END QUERY
    }
  });
});//END GET ROUTE

router.get('/this/:id', function (req, res) {
  var searchId = req.params.id
  console.log(searchId);
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      var queryText = 'SELECT "id", "username", "real_name", "email",  "bio" FROM "users" WHERE "id" = $1 ;';
      db.query(queryText, [searchId], function (errorMakingQuery, result) {
        done();
        if (errorMakingQuery) {
          console.log('Error making query', errorMakingQuery);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.send(result.rows);
        }
      }); // END QUERY
    }
  });
});//END GET ROUTE

router.delete('/follow/:id', function (req, res) {
  console.log(req.params);

  var followID = req.params.id
  console.log('req', followID);
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      var queryText = 'DELETE FROM "following" Where  "id" = $1;'
      db.query(queryText, [followID], function (errorMakingQuery, result) {
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

router.post('/follow/:id', function (req, res) {
  console.log(req.params.id);
  console.log('body', req.body);

  var followId = req.params.id
  var follow = req.body
  pool.connect(function (errorConnectingToDb, db, done) {
    if (errorConnectingToDb) {
      console.log('Error connecting', errorConnectingToDb);
      res.sendStatus(500);
    } else {
      var queryText = 'INSERT INTO "following" ("user_id" , "reviewer_id", reviewer_name) VALUES ($1 , $2, $3);';
      db.query(queryText, [followId, follow.username, follow.reviewer_id], function (errorMakingQuery, result) {
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
