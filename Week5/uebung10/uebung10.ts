class Vehicle{
    pricePerMinute: number;
    priceToUnlock: number;
    distanceTravelled: number;
    name: string;
    id: number;
    taken: boolean;

    constructor(
        pricePerMinute: number,
        priceToUnlock: number,
        distanceTravelled: number,
        name: string,
        id: number,
        taken: boolean) {
            this.pricePerMinute = pricePerMinute;
            this.priceToUnlock = priceToUnlock;
            this.distanceTravelled = distanceTravelled;
            this.name = name;
            this.id = id;
            this.taken = taken;
    }

    getPricePerMinute(): number {
        return this.pricePerMinute
    }
    setPricePerMinute(newPricePerMinute: number): number {
        return this.pricePerMinute = newPricePerMinute
    }
    getPriceToUnlock(): number {
        return this.priceToUnlock
    }
    setPriceToUnlock(newPriceToUnlock: number): number {
        return this.priceToUnlock = newPriceToUnlock
    }
    getDistanceTravelled(): number {
        return this.distanceTravelled
    }
    getName(): string {
        return this.name
    }
    setName(newName: string): string {
        return this.name = newName
    }
    getId(): number {
        return this.id
    }
    getTaken(): boolean {
        return this.taken
    }
}

type FuelStatus = 'full' | 'half full' | 'almost empty'

class Car extends Vehicle {
    fuelPercentage: number;
    kilometersLeft: number;
    brand: string

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, fuelPercentage: number, kilometersLeft: number, brand: string) {
        super(
            pricePerMinute,
            priceToUnlock,
            distanceTravelled,
            name,
            id,
            taken)
        this.fuelPercentage = fuelPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    getFuelPercentage(): number {
        return this.fuelPercentage
    }

    getKilometersLeft(): number {
        return this.kilometersLeft
    }

    getBrand(): string {
        return this.brand
    }
}

class Scooter extends Vehicle {
    batteryPercentage: number;
    kilometersLeft: number;
    brand: string

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, batteryPercentage: number, kilometersLeft: number, brand: string) {
        super(pricePerMinute, priceToUnlock, distanceTravelled, name, id, taken)
        this.batteryPercentage = batteryPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    getBatteryPercentage(): number {
        return this.batteryPercentage
    }

    getKilometersLeft(): number {
        return this.kilometersLeft
    }

    getBrand(): string {
        return this.brand
    }
}

class Bike extends Vehicle {
    brand: string;
    frameNumber: number

    constructor(pricePerMinute: number, priceToUnlock: number, distanceTravelled: number, name: string, id: number, taken: boolean, frameNumber: number, brand: string) {
        super(pricePerMinute,
            priceToUnlock,
            distanceTravelled,
            name,
            id,
            taken)
        this.frameNumber = frameNumber
        this.brand = brand
    }

    getFrameNumber(): number {
        return this.frameNumber
    }

    getBrand(): string {
        return this.brand
    }
}

let Vehicle1 = new Vehicle(0.5, 1, 0, 'Vehicle1', 1, false)
let Vehicle2 = new Vehicle(0.7, 1.5, 209, 'Vehicle2', 2, true)

let Car1 = new Car(0.5, 1, 0, 'Car1', 3, false, 81, 200, 'MatchboxCar')
let Car2 = new Car(0.7, 1.5, 209, 'Car2', 4, false, 14, 200, 'BobbyCar')
let Car3 = new Car(0.5, 1, 287, 'Car3', 5, true, 18, 200, 'AfriCar')

let Scooter1 = new Scooter(0.5, 1, 0, 'Scooter1', 6, false, 80, 300, 'HyperHyper')
let Scooter2 = new Scooter(0.5, 1, 0, 'Scooter2', 7, true, 80, 300, 'HowMuchIsTheFish')
let Scooter3 = new Scooter(0.5, 1, 0, 'Scooter3', 8, false, 1, 300, 'Dööp, Döp, Dööp, Dödö, Döp, Döp, Döp')

let Bike1 = new Bike(0.5, 1, 0, 'Bike1', 9, false, 9, 'BMX')
let Bike2 = new Bike(0.5, 1, 0, 'Bike2', 10, false, 10, 'DMX')
let Bike3 = new Bike(0.5, 1, 0, 'Bike3', 11, true, 11, 'RTX')

function updatedDistance(kmTravelled: number, vehicle: Vehicle): number {
    return vehicle.getDistanceTravelled() + kmTravelled
}

function isAvailable(vehicle: Vehicle): boolean | void {
    if (!vehicle.getTaken()) {
        if (vehicle instanceof Bike) {
            return true
        }
        if (vehicle instanceof Scooter) {
            if (vehicle.getBatteryPercentage() > 10) return true
            return false
        }
        if (vehicle instanceof Car) {
            if (vehicle.getFuelPercentage() > 15) return true
            return false
        }
    }
    return false
}

function getFuelStatus(getFuelPercentage: number): FuelStatus | undefined {
    if (getFuelPercentage > 80) return 'full'
    if (getFuelPercentage < 20) return 'half full'
    return 'almost empty'
}

let availableVehicles: Vehicle[] = []
function getAvailableVehicles(x: Vehicle[]): Vehicle[] {
    x.forEach(vehicle => {
        if (isAvailable(vehicle)) availableVehicles.push(vehicle)
    })
    return availableVehicles
}


/* ======= Some console.logs to test the code ======= */
console.log(getAvailableVehicles([Car1, Car2, Car3, Scooter1, Scooter2, Scooter3, Bike1, Bike2, Bike3]))
console.log(getFuelStatus(Car1.fuelPercentage))
console.log(updatedDistance(200, Car1))
console.log(isAvailable(Scooter3))


export{}