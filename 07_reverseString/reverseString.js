const reverseString = function(inputString) {

    if(inputString.length === 0) return "";

    if(inputString.length === 1) return inputString;
    
    return inputString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
