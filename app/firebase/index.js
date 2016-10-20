import firebase from 'firebase';

try{
var config = {
    apiKey: "AIzaSyAD6Y5kMpDzGjkIm0zOmNjDF08GASgmcsg",
    authDomain: "todoapp-497ef.firebaseapp.com",
    databaseURL: "https://todoapp-497ef.firebaseio.com",
    storageBucket: "todoapp-497ef.appspot.com",
    messagingSenderId: "958180000673"
  };
  firebase.initializeApp(config);
}catch(e){


}

export var firebaseRef = firebase.database().ref();
export default firebase;