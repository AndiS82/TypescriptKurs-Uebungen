"use strict";
// Aufgabe 1
Object.defineProperty(exports, "__esModule", { value: true });
const aString = "Hallo";
let myWord = "Ein Wort";
myWord = aString;
let myNumber = 1;
const myStringOrNumber = 1;
// Aufgabe 3
function introduction(param) {
    return ("Hallo, mein Inhalt lautet: " + param);
}
introduction("Lars");
// introduction(param: false)
introduction(5);
// Aufgabe4
const showIntroduction = (param) => {
    if (typeof param === "undefined") {
        return "Mein Inhalt ist leer.";
    }
    else {
        return ("Hallo, mein Inhalt lautet: " + param);
    }
};
showIntroduction(undefined);
showIntroduction("Grüß Gott!");
// Aufgabe5
const keepPlaying = (param) => {
    if (typeof param === "number" && param < 10) {
        return true;
    }
    else if (param === true) {
        return true;
    }
    else {
        return false;
    }
};
keepPlaying(1);
keepPlaying(true);
keepPlaying(10);
// Aufgabe 6
const move = (move) => {
    const moveLow = move.toLowerCase();
    switch (moveLow) {
        case "links":
            return 0;
            break;
        case "rechts":
            return 1;
            break;
        case "oben":
            return 2;
            break;
        case "unten":
            return 3;
            break;
        default: undefined;
    }
};
move("rechts");
move("oben");
move("move überall hin");
//# sourceMappingURL=ue3.js.map