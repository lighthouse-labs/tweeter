"use strict";

const initialTweets = require("./tweets");

// const db = null

const dbMethods = {


  saveTweet: (data) => {
    // db.tweets.push(data);
    currentDB.collection('tweeter').insertOne(data, function(err, r) {
    return true
    });  
  },

  getTweets: (onDone) => {
    // return db.tweets.sort(function(a, b) { return a.created_at - b.created_at });

    var col = currentDB.collection('tweeter');

    // Get first two documents that match the query
    col.find().toArray(function(err, docs) {
      onDone(docs);
      
    });
  }
}
var currentDB;

module.exports = {

  connect: (onConnect) => {

    var MongoClient = require('mongodb').MongoClient
      , assert = require('assert');

    // Connection URL
    var url = 'mongodb://localhost:27017/tweeter';

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
      currentDB = db
      onConnect(dbMethods);
      console.log("Connected successfully to server");

    });
  }

}
