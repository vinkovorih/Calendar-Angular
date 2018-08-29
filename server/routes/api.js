const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log(err);
    let db = client.db('calendar')
});

let response = {
  data: [],
  message: ""
};

router.post('/register', function(req,res,next) {
      db.collection('users').insertOne(req.body).then(user => {
        response.data = user;
        response.message = "Successfully registered!";
        res.json(response);
      }).catch((err) => {
        response.message = "Unexpected error! Try again later!";
      })
        .catch(err => {
          res.json(response);
        });
});

router.route('/countries')
  .get(function(req,res){
    db.collection('countries')
      .find()
      .toArray()
      .then((result) => {
        response.data = result;
        res.json(response.data);
      })
      .catch((error) => {
        response.message = "Unexpected error. Reload webpage!";
      })
  });

router.route('/roster')
  .get(function(req,res){
    db.collection('roster')
      .find()
      .toArray()
      .then((result) => {
        response.data = result;
        res.json(response.data);
      })
      .catch((error) => {
        response.message = "Unexpected error while acquiring roster data! Try again later";
      })
  });

router.route('/applicate')
  .post(function(req,res){
    db.collection('applications')
      .insertOne(req.body)
      .then(result => {
        response.message = "Application inserted successfully!";
        res.json(response);
      })
      .catch(error => {
        response.message = "Unexpected error! Try again later!";
      });
  });


module.exports = router;
