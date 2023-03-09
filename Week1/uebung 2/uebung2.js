"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Concatenate = (first, second) => {
    const Uebungconcat = first + second;
    return Uebungconcat;
};
console.log("ein ", "String");
const Numberify = (numberify) => {
    const number = Number(numberify);
    return number;
};
console.log(Numberify("4"));
const chainCreator = (toChain, multiplier) => {
    let chainifyMe = "";
    for (let i = 0; i < multiplier; i++) {
        chainifyMe += toChain;
    }
    return chainifyMe;
};
console.log(chainCreator("test", 3));
const isVowel = (letter) => {
    if (letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u") {
        return true;
    }
    else {
        return false;
    }
};
console.log(isVowel("a"));
console.log(isVowel("k"));
const weirdifyVowels = (word, number) => {
    let result = word;
    let times = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" ||
            word[i] === "e" ||
            word[i] === "i" ||
            word[i] === "o" ||
            word[i] === "u") {
            result = result.slice(0, times) + word[i].repeat(number - 1) + result.slice(times);
            times = times + number;
        }
        times++;
    }
    return result;
};
console.log(weirdifyVowels("ente", 5));
//# sourceMappingURL=uebung2.js.map