function add(a,b){
	return a+b;
}

console.log(add(3,1));

var toAdd = [1,4];

console.log(add(...toAdd));

var group_a = ["jon", "jane"];
var group_b = ["sam","simon"];
var final = [ ...group_a, 3, ...group_a];

console.log(final);



var person = ["andrew", 25];
var person2 = ['jan', 23];

output(...person);
output(...person2);

function output(person, age){
	console.log(`hello ${person}, you are ${age}`);
}

var names = ['mike', 'peter'];
var final = ['paul', ...names];
loop(final);
function loop(names){
	names.map((x)=>{
		console.log("hello " + x);
	});
}

