const fibonacci = function(index) {
    index = Number(index);
    var fibA = 0;
    var fibB = 1;
    var fibC = 0;

    
    // console.log(index);
    if (index < 0 ) return "OOPS";
    if(index === 1) return 1;
    for(let i = 1; i < index; i ++){
        // console.log("index: " + i);
        // console.log("FibC: " + fibC + " FibB: " + fibB + " FibA: " + fibA);
        fibC = fibA + fibB;
       


        fibA = fibB;
        fibB = fibC;
        // console.log("AFTER");
        // console.log("FibC: " + fibC + " FibB: " + fibB + " FibA: " + fibA);

    }
    return fibC;

};

// Do not edit below this line
module.exports = fibonacci;
