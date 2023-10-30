function reverseWordsInSentence(sentence) {
    let words = [];
    let thisWord = '';
    for (let char of sentence) {
        if (char === ' ') {
            words.push(thisWord);
            thisWord = '';
        } else {
            thisWord += char;
        }
    }
    if (thisWord) {
        words.push(thisWord);
    }

    for (let i = 0; i < words.length; i++) {
        words[i] = rs(words[i]);
    }

    let reversedSentence = words.join(' ');
    return reversedSentence;
}

function rs(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const input = "hey beautiful have a nice day ";
const reversedSentence = reverseWordsInSentence(input);
console.log(reversedSentence); 
