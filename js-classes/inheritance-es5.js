function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
    return this.name + ' ' + this.model
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year
}

Car.prototype.changeColor = function (color) {
    if (this.color === color) {
        console.log('The car is already painted ' + this.color)
    } else {
        this.color = color;
        console.log('The car is painted ' + this.color)
    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
    if (fuel < 10) {
        console.log('Low fuel level')
    }
    console.log('Average time is ' + Math.round((kilometers / this.maxSpeed) * 10) / 10 + ' hours');
    const way = (fuel * 100) / this.fuelConsumption;
    if (kilometers > way) {
        const refuel = (kilometers - way) / this.fuelConsumption;
        if (refuel > this.fuelCapacity) {
            console.log('You need to refuel ' + refuel + ' liters, but your fuel capacity is ' + this.fuelCapacity
                + ' liters')
        } else {
            console.log('You have to refuel your car ' + refuel + ' liters')
        }
    }
}

const car = new Car('VW', 'Tiguan', 2019, 'tungsten silver', 120);

function Coupe(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, doors) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.doors = doors;
}

Coupe.prototype.quantityOfDoors = function () {
    console.log('The quantity of doors is ' + this.doors)
}

function Sport(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, wheels) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.wheels = wheels;
}

Sport.prototype.quantityOfWheels = function () {
    console.log('The quantity of wheels is ' + this.wheels)
}

function Pickup(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, trunk) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.trunk = trunk;
}

Pickup.prototype.trunkSize = function () {
    console.log('The trunk size is ' + this.trunk + ' liters')
}

const coupe = new Coupe('BMW', 'M3', 1990, 'blue', 160, 55,
    25, 2);
const sport = new Sport('Ferrari', 'GT', 1967, 'red', 230, 45,
    20, 4);
const pickup = new Pickup('Nissan', 'Navara', 2010, 'white', 150, 80,
    14, 1000);