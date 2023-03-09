"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
const Hello = () => {
    console.log("Hello World!");
};
exports.Hello = Hello;
/*=======Übungs-Codesnippet von Lars========*/
// Aufgabe: Korrigiere folgenden Code:
// function greetEveryone(greeting: number, participants: string[]): boolean {
//     let message = "";
//     participants.forEach((participant) => {
//       message += greeting + " " + participant + "\n";
//     });
//     return message;
//   }
//   let welcomeText: string = "Willkommen im TypeScript-Kurs";
//   let participants: number[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
//   console.log(greetEveryone(welcomeText, participants));
//   export {};
//   Andreas: Fehler sind: Z.7, 17 number, Z.7 string und boolean; Korrektur folgt unten
function greetEveryone(greeting, participants) {
    let message = "";
    participants.forEach((participant) => {
        message += greeting + " " + participant + "\n";
    });
    return message;
}
let welcomeText = "Willkommen im TypeScript-Kurs";
let participants = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
console.log(greetEveryone(welcomeText, participants));
/*=======Übungs-Codesnippet von Lars========*/
// Aufgabe: Blackliste Namen, die nicht gegrüßt werden sollen. Im Code müssen Typannotationen ergänzt werden
// function addToParticipants(name, participants) {
//     participants.push(name);
//     return participants;
//   }
//   function removeFromParticipants(name, participants) {
//     const index = participants.indexOf(name);
//     if (index > -1) {
//       participants.splice(index, 1);
//     }
//     return participants;
//   }
//   participants = addToParticipants("Chad", participants);
//   console.log(greetEveryone("Hi", participants));
//   participants = removeFromParticipants("Marzio", participants);
//   console.log(greetEveryone("Hi", participants));
function addToParticipants(name, participants) {
    participants.push(name);
    return participants;
}
function removeFromParticipants(name, participants) {
    const index = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}
participants = addToParticipants("Chad", participants);
console.log(greetEveryone("Hi", participants));
participants = removeFromParticipants("Marzio", participants);
console.log(greetEveryone("Hi", participants));
//# sourceMappingURL=uebung1.js.map