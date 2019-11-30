/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let set = new Set();
    const codeA = 97;   // 'a'.charCodeAt() -> ASCII码 -> 97

    words.forEach(word => { 
        let str = '';

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - codeA;
            str += codes[index];
        }
        set.add(str);
    });
    console.log(set, set.size);
    return set.size;
};

let words = ["gin", "zen", "gig", "msg"];
uniqueMorseRepresentations(words);