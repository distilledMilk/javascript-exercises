const removeFromArray = function(arr, ...elements) {
    numOfArgs = arguments.length - 1;

    var count = 1;
    for(let element of elements){
        for(let i=0; i< arr.length; i++){
            if(arr[i] === element){
                arr.splice(i, 1);
                i--;
                console.log(count);
                console.log("index:" + i);
                count++;
            }
           
        }
    }

    // for (let index = 0; index < arr.length; index++) {
    //     for(let element of elements){
    //         if(arr[index] === element) arr.splice(index, 1);
    //     }
        
    // }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
