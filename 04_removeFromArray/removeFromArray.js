const removeFromArray = function(myArray, x) {

    const index = myArray.indexOf(x);
    
    const i = myArray.splice(index, 1);
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
