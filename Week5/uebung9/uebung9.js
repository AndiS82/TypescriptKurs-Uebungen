"use strict";
// class Employee {
//   name: string;
//   age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getName(): string {
//     return this.name;
//   }
//   getAge(): number {
//     return this.age;
//   }
// }
// let john = new Employee("John", 30);
// console.log(john.getName()); //output "John"
// console.log(john.getAge()); //output 30
// setName(newName: string) {
//     this.name = newName;
// }
// setAge(newAge: number) {
//     this.age = newAge;
// }
// let john = new Employee('John', 30);
// console.log(john.getName()); //output "John"
// john.setName('Jane');
// console.log(john.getName); //output "Jane"
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getAge() {
        return this.age;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
//# sourceMappingURL=uebung9.js.map