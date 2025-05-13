const sumAll = function(num1, num2) {
    if ([num1, num2].some(i => i < 0 || !Number.isInteger(i))) {
        return "ERROR";
    } else {
        let start = Math.min(num1, num2);
        let end = Math.max(num1, num2);
        let theSum = 0;
        for (; start <= end; start++) {
            theSum = theSum + start;
        }
        return theSum;
    }
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
