const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	var sum = 0;
  if (arr.length === 0) return sum;
  
  for(let i = 0; i < arr.length; i++){
     sum = sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  
  if (arr.length === 0) return 0;
  var multiply = arr[0];
  for(let i = 1; i < arr.length; i++){
     multiply = multiply * arr[i];
     console.log(multiply);
  }
  return multiply;
};

const power = function(a, pow) {

  return a ** pow;
	
};

const factorial = function(arr) {

    if( arr=== 0) return 1;

   var factorial = 1; 

    for (let i = 1; i < arr+1; i++){
      factorial = factorial * i;
    }
    return factorial;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
