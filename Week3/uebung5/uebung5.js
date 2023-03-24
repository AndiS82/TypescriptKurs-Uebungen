"use strict";
// Aufgabe 1
Object.defineProperty(exports, "__esModule", { value: true });
function sum(nums) {
    let summe = 0;
    nums.forEach(element => {
        summe += element;
    });
    return summe;
    // bzw: 
    // return nums.reduce((a,b)=> a+b,0);
}
// Aufgabe 2
function sum2(items) {
    let summe2 = "";
    items.forEach(element => {
        summe2 += element;
    });
    return summe2;
}
;
console.log(sum2(["test", 1, "lol"]));
function genericLast(arr) {
    const size = arr.length;
    if (size < 1) {
        return undefined;
    }
    return arr[size - 1];
}
console.log(genericLast([1, 2, 3]));
// Letzte Aufgabe
function genericRange(collection, start, end) {
    if (start < 0) {
        return [];
    }
    if (end > collection.length - 1) {
        return [];
    }
    const subCollection = collection.slice(start, end);
    if (subCollection.length === 1) {
        subCollection[0];
    }
    return subCollection;
}
//# sourceMappingURL=uebung5.js.map