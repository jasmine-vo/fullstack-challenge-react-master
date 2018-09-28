const firebase = require('firebase');
// The configuration for initializing the application will be provided!
module.exports = firebase.initializeApp({
  databaseURL: 'https://leapyear-take-1a8b3.firebaseio.com/'
});