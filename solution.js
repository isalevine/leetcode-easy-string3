// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/




// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.





var firstUniqChar = function(s) {
    if (s == "") {
        return -1
    };
    
    let arr = s.split("");
    let dict = {};
    
    for (i = 0; i < arr.length; i++) {
        let char = arr[i];
        if (dict[char]) {
            dict[char].count++;
            dict[char].index.push(i);
        } else {
            dict[char] = {count: 1, index: [i]};
        };
    };
    
    let uniqueChar = {char: false, index: arr.length}
    let keys = Object.keys(dict);
    for (i = 0; i < keys.length; i++) {
        let char = keys[i];
        
        if (dict[char].count == 1 && dict[char].index[0] <= uniqueChar.index) {
            uniqueChar.char = char;
            uniqueChar.index = dict[char].index[0];
        };
    };
    
    if (uniqueChar.char) {
        return uniqueChar.index
    } else {
        return -1
    };

};