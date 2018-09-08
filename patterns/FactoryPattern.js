// Factory Pattern
// frequently used in applications that manage,
// maintain, or manipulate collections of objects
// that are different but at the same time have
// many characteristics in common

// Allows for calling without needing 'new'
// Uses closures to prevent weird 'this' incidences (like calling in an event handler)

// Robot Example
const Robot = function(name) {
	const robot = {};
	robot.name = name;
	robot.speak = function(message) {
		console.log(robot.name + ' speaks ' + message);
	};
	return robot;
};

// ------- Employee Example --------- //

// skeleton employee factory
function EmployeesFactory() {}

// Add factory function for creating new
EmployeesFactory.prototype.createEmployee = function(type) {
	if (type === 'Manager') {
		return new Manager();
	} else if (type === 'Teacher') {
		return new Teacher();
	} else if (type === 'CEO') {
		return new CEO();
	}
};

// Constructor for defining new Managers
function Manager() {
	this.hourlyWage = 250;
	this.title = 'Manager';
}
// Constructor for defining new Teachers
function Teacher() {
	this.hourlyWage = 125;
	this.tile = 'Professor';
}
// Constructor for defining new CEOs
function CEO() {
	this.hourlyWage = 999;
	this.title = 'Boss';
}

// ------- Vehicle Example --------- //

// Constructor classes
function Car(options) {
	this.doors = options.doors || 4;
	this.state = options.state || 'brand new';
	this.color = options.color || 'silver';
}

function Truck(options) {
	this.state = options.state || 'worn';
	this.wheelSize = options.wheelSize || 36;
	this.color = options.color || 'black';
}

// skeleton
function VehicleFactory() {}

// set a default vehicle class
VehicleFactory.prototype.vehicleClass = Car;

// Factory function
VehicleFactory.prototype.createVehicle = function(options) {
	switch (options.vehicleType) {
		case 'car':
			this.vehicleClass = Car;
			break;
		case 'truck':
			this.vehicleClass = Truck;
			break;
	}

	return new this.this.vehicleClass(options);
};

// Usage
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
	vehicleType: 'car',
	color: 'yellow',
	doors: 2
});

car instanceof Car; // true
