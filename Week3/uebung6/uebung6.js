"use strict";
//Übung 1
// Erstelle einen Tuple mit string und date
Object.defineProperty(exports, "__esModule", { value: true });
//Übung 2
const Andi = ["Andi", new Date("1982-4-21")];
const today = new Date();
function daysUntil(x) {
    const yourNextBirthday = new Date(new Date().getFullYear() + "-" + (x[1].getMonth() + 1) + "-" + x[1].getDate());
    const dateConversion = (yourNextBirthday.getTime() - today.getTime());
    const days = (dateConversion / 1000 / 60 / 60 / 24);
    console.log(x[0] + "your birthday is in " + days + " days");
    return days;
}
console.log(daysUntil(Andi));
//Übung 3
const Carina = ["Carina", new Date("1991-12-19")];
const birthdayList = [
    ["Andi", new Date("1982-04-21")], ["Carina", new Date("1991-12-19")]
];
const birthdayArray = [];
function birthdayListArray(x) {
    x.forEach(person => {
        birthdayArray.push([person[0], daysUntil(person)]);
    });
    return birthdayArray.sort((a, b) => a[1] - b[1]);
}
console.log(birthdayListArray(birthdayList));
//Übung 4
function nextBirthday(x) {
    const sortedBDayList = birthdayListArray(birthdayList)[0];
    return sortedBDayList[0];
}
console.log(nextBirthday(birthdayList));
//# sourceMappingURL=uebung6.js.map