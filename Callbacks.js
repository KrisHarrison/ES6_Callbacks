
//return the sum
var add = function(num1,num2){
	return num1 + num2;
}

//return the difference
var subtract = function(num1,num2){
	return num1 - num2;
}

//return the product
var multiply = function(num1,num2){
	return num1 * num2;
}

//return the quotient
var divide = function(num1,num2){
	return num1 / num2;
}

//return calculation using callback
var calc = function(num1, num2, callback){
	return callback(num1, num2);
}

//calculation passing add as callback
console.log(calc(24,3,add));
//calculation passing subtract as callback
console.log(calc(24,3,subtract));
//calculation passing multiply as callback
console.log(calc(24,3,multiply));
//calculation passing divide as callback
console.log(calc(24,3,divide));
