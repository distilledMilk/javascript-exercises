const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32 ) * (5/9);

  return celsius = Number((Math.round(celsius * 10)/10).toFixed(1));
  
};

const convertToFahrenheit = function(celsius) {

  fahrenheit = (celsius* (9/5)) + 32;

  return fahrenheit = Number((Math.round(fahrenheit * 10)/10).toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
