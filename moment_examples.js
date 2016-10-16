var moment = require('moment');

console.log(moment().format());

/*
var now = moment();

//time in seconds since jan 1, 1970
console.log("current time", now.unix());

var timestamp = 1467889909;

console.log("timestamp is ", moment().format("MMMM Do YYYY h:mm:ss A"));
*/

var some_array = [{a: 1, b: 2, c: 3}, {a: 4, b: 5, c: 6}];

var new_array = some_array.map(function(x){
	x.a = 2222;
	return x;
})

console.log(new_array)