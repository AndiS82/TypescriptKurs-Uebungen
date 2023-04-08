"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken) {
        this.pricePerMinute = pricePerMinute;
        this.priceToUnlock = priceToUnlock;
        this.distanceTravelled = distanceTravelled;
        this.name = name;
        this.id = id;
        this.taken = taken;
    }
    getPricePerMinute() {
        return this.pricePerMinute;
    }
    setPricePerMinute(newPricePerMinute) {
        return this.pricePerMinute = newPricePerMinute;
    }
    getPriceToUnlock() {
        return this.priceToUnlock;
    }
    setPriceToUnlock(newPriceToUnlock) {
        return this.priceToUnlock = newPriceToUnlock;
    }
    getDistanceTravelled() {
        return this.distanceTravelled;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        return this.name = newName;
    }
    getId() {
        return this.id;
    }
    getTaken() {
        return this.taken;
    }
}
class Car extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, fuelPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.fuelPercentage = fuelPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getFuelPercentage() {
        return this.fuelPercentage;
    }
    getKilometersLeft() {
        return this.kilometersLeft;
    }
    getBrand() {
        return this.brand;
    }
}
class Scooter extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, batteryPercentage, kilometersLeft, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.batteryPercentage = batteryPercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getBatteryPercentage() {
        return this.batteryPercentage;
    }
    getKilometersLeft() {
        return this.kilometersLeft;
    }
    getBrand() {
        return this.brand;
    }
}
class Bike extends Vehicle {
    constructor(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken, frameNumber, brand) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken);
        this.frameNumber = frameNumber;
        this.brand = brand;
    }
    getFrameNumber() {
        return this.frameNumber;
    }
    getBrand() {
        return this.brand;
    }
}
let Vehicle1 = new Vehicle(0.5, 1, 0, 'Vehicle1', 1, false);
let Vehicle2 = new Vehicle(0.7, 1.5, 209, 'Vehicle2', 2, true);
let Car1 = new Car(0.5, 1, 0, 'Car1', 3, false, 81, 200, 'MatchboxCar');
let Car2 = new Car(0.7, 1.5, 209, 'Car2', 4, false, 14, 200, 'BobbyCar');
let Car3 = new Car(0.5, 1, 287, 'Car3', 5, true, 18, 200, 'AfriCar');
let Scooter1 = new Scooter(0.5, 1, 0, 'Scooter1', 6, false, 80, 300, 'HyperHyper');
let Scooter2 = new Scooter(0.5, 1, 0, 'Scooter2', 7, true, 80, 300, 'HowMuchIsTheFish');
let Scooter3 = new Scooter(0.5, 1, 0, 'Scooter3', 8, false, 1, 300, 'Dööp, Döp, Dööp, Dödö, Döp, Döp, Döp');
let Bike1 = new Bike(0.5, 1, 0, 'Bike1', 9, false, 9, 'BMX');
let Bike2 = new Bike(0.5, 1, 0, 'Bike2', 10, false, 10, 'DMX');
let Bike3 = new Bike(0.5, 1, 0, 'Bike3', 11, true, 11, 'RTX');
function updatedDistance(kmTravelled, vehicle) {
    return vehicle.getDistanceTravelled() + kmTravelled;
}
function isAvailable(vehicle) {
    if (!vehicle.getTaken()) {
        if (vehicle instanceof Bike) {
            return true;
        }
        if (vehicle instanceof Scooter) {
            if (vehicle.getBatteryPercentage() > 10)
                return true;
            return false;
        }
        if (vehicle instanceof Car) {
            if (vehicle.getFuelPercentage() > 15)
                return true;
            return false;
        }
    }
    return false;
}
function getFuelStatus(getFuelPercentage) {
    if (getFuelPercentage > 80)
        return 'full';
    if (getFuelPercentage < 20)
        return 'half full';
    return 'almost empty';
}
let availableVehicles = [];
function getAvailableVehicles(x) {
    x.forEach(vehicle => {
        if (isAvailable(vehicle))
            availableVehicles.push(vehicle);
    });
    return availableVehicles;
}
/* ======= Some console.logs to test the code ======= */
console.log(getAvailableVehicles([Car1, Car2, Car3, Scooter1, Scooter2, Scooter3, Bike1, Bike2, Bike3]));
console.log(getFuelStatus(Car1.fuelPercentage));
console.log(updatedDistance(200, Car1));
console.log(isAvailable(Scooter3));
//# sourceMappingURL=uebung10.js.map