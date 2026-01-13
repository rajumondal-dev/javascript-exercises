const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  
	return array.reduce((a,b) => a+b, 0);
};

const multiply = function(array) {
  return array.reduce((a,b) => a*b, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  let result = 1;
	for(let i=num; i>=1; i--){
    result *= i;
  };
  return result;
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
