const sumAll = function(a, b) {

    if((Number.isInteger(a) && Math.sign(a) === 1) && (Number.isInteger(b) && Math.sign(b) === 1)){
        sum = 0;
        a > b ? lowest = b  : lowest = a;
        a > b ? highest = a : highest = b;

        for(i = lowest; i < highest+1; i++){
            sum = sum + i;
        }
        return sum;
    }   
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
