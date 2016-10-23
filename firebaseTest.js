//import firebase from 'firebase';
var firebase = require('firebase');
console.log("firebase", firebase);
// Initialize Firebase






  var config = {
    apiKey: "AIzaSyAD6Y5kMpDzGjkIm0zOmNjDF08GASgmcsg",
    authDomain: "todoapp-497ef.firebaseapp.com",
    databaseURL: "https://todoapp-497ef.firebaseio.com",
    storageBucket: "todoapp-497ef.appspot.com",
    messagingSenderId: "958180000673"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
  firebaseRef.set({
  	app: {
  		name: "todo",
  		version: "1.0"
  	},
  	isRunning: true,
  	user: {
  		name: 'mike',
  		age: 38,
  		sex: 'm'
  	}
  }).then(()=>{
  	console.log('setworked');
  },()=>{
  	console.log('set worked');
  });


 var myNotesRef = firebaseRef.child('notes');
 var newNote = myNotesRef.push({chore: "take out trash", time: "9:00"});

 myNotesRef.on("child_added", (snapshot)=>{
 	console.log("note added:", snapshot.key, snapshot.val());
 });

 myNotesRef.on("child_changed", (snapshot)=>{
 	console.log("note changed:", snapshot.key, snapshot.val());
 });



/*
var notesRef = firebaseRef.child('notes');
notesRef.on('child_added', (snapshot)=>{
	console.log('child_added', snapshot.key, snapshot.val())
})


notesRef.on('child_changed', (snapshot)=>{
	console.log('child_changed', snapshot.key, snapshot.val())
})

notesRef.on('child_removed', (snapshot)=>{
	console.log('child_removed', snapshot.key, snapshot.val())
})

var newNoteRef = notesRef.push({text: "walk the dog!!!!"});
console.log("id:", newNoteRef.key)
*/



  /*
  firebaseRef.child('app').once('value').then((snapshot)=>{
  	console.log("got database", snapshot.key, snapshot.val());
  },(e)=>{
  	console.log("unable to get data", e)
  })
	*/
/*
firebaseRef.on('value', (snapshot)=>{
	console.log('got value', snapshot.val());
});

firebaseRef.off(); //when no function is passed, shuts off all listeners
firebaseRef.update({isRunning: false});

firebaseRef.on('value', (snapshot)=>{
	console.log('updated ', snapshot.val())
});

firebaseRef.child('user').update({sex: 'f'});
firebaseRef.child('app').update({name: "my app"});
/*
  //set wipes out any item and replaces it
  /*
  firebaseRef.child('user').set({name: 'jim'});
  firebaseRef.child('app').set({name: "Tuna"});
  */

  //two ways to update nested items
  /*
  firebaseRef.update({
  	isRunning: false,
  	'app/name': 'todo application'

  });

  firebaseRef.child('app').update({
  	name: 'todo app'
  }).then(()=>{
  	console.log("it worked");
  },()=>{
  	console.log("it failed")
  })

*/
/*
firebaseRef.update({
	'app/name': 'todo application',
	'app/version': '2.0'
});

firebaseRef.child('app').update({name: "todolist", version: "3.0"})
*/
//removing - items

//firebaseRef.remove(); //removes everything

//firebaseRef.child('app/name').remove();
/*
firebaseRef.child('name').update({
	version: "4.0",
	name: null
})

firebaseRef.child('user/age').remove();
firebaseRef.child('app').update({
	name: "it works",
	version: null
});
*/
