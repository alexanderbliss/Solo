var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');
// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in', req.user);
    var userInfo = {
      username : req.user.username

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


module.exports = router;
