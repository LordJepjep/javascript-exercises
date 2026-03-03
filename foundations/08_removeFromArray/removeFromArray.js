const removeFromArray = function(arr, ...valsToRemove) {
    return arr.filter(item => !valsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
