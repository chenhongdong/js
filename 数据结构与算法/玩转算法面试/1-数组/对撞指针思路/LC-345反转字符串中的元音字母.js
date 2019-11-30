/* 
    编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

    示例 1:
        输入: "hello"
        输出: "holle"
*/
var reverseVowels = function(s) {
    const vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u',
        A: 'A',
        E: 'E',
        I: 'I',
        O: 'O',
        U: 'U'
    };
    let i = 0, j = s.length - 1;
    let res = new Array(s.length).fill('');

    while (i <= j) {
        let start = s[i];
        let end = s[j];

        if (!vowels[start]) {
            res[i] = start;
            i++;
        } else if (!vowels[end]) {
            res[j] = end;
            j--;
        } else {
            res[i++] = end;
            res[j--] = start; 
        }
    }
    return res.join('');
};

console.log(reverseVowels('aA'));