const removeFromArray = function(...args) {
    // return array.filter(item => item !== removed_element)
    let originalList = args[0];
    let removedList = args.slice(1);

    for (i of removedList) {
        if (originalList.includes(i)) {
            originalList = originalList.filter(item => item !== i);
        }
    }

    return originalList
}

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
