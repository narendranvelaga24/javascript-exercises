const reverseString = function(word) {
    const arr = new Array(word.length);
    let rev = '';
    for (let i=0; i<word.length; i++) {
        arr[i] = word[word.length - i - 1];
        rev = rev + arr[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
