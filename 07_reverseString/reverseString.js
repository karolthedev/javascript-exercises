const reverseString = function(text) {
    let newText = "";
    for (i of text) {
        newText = i.concat("", newText);
    }
    return newText; 
};

// Do not edit below this line
module.exports = reverseString;
