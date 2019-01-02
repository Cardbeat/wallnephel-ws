const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyBNFQfxpOsX_HN9J8eK2ovED10bE1z3cTM",
    authDomain: "wallnephel-ws.firebaseapp.com",
    databaseURL: "https://wallnephel-ws.firebaseio.com",
    projectId: "wallnephel-ws",
    storageBucket: "wallnephel-ws.appspot.com",
    messagingSenderId: "680463894375"
  };
firebase.initializeApp(config);

console.log('firebase is working')