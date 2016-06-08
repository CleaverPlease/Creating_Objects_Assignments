// -------------  CREATING OBJECT PART I ----------------------

// function vehicleConstructor(name, number_of_wheels, number_of_passangers) {
//   this.name = name
//   this.number_of_wheels = number_of_wheels
//   this.number_of_passangers = number_of_passangers
//
//   this.makeNoise = function() {
//   }
// }
// var car = new vehicleConstructor('Truck',4,1)
// var bike = new vehicleConstructor('CBR600',2,1)
// var bus = new vehicleConstructor('Magic School Bus',8,10)
// bus.pickUpPassenger = function(number) {
//   this.number_of_passangers += number
// }

// bike.makeNoise = function () {
//   console.log('ring,ring')
// }
// console.log(car)
// console.log(bike)
// console.log(bus)
// bus.pickUpPassenger(10)
// console.log(bus)
// bike.makeNoise()

//------------------ CREATING OBJECTS PART II -------------------

function vehicleConstructor(name, number_of_wheels, number_of_passangers, speed) {

  this.name = name
  this.number_of_wheels = number_of_wheels
  this.number_of_passangers = number_of_passangers
  this.speed = speed
  this.makeNoise = function() {}

  var self = this
  var distance_travelled = 0
  var update_Distance_Travelled = function () {
    distance_travelled += self.speed
  }

  this.move = function () {
    update_Distance_Travelled()
    this.makeNoise()
  }

  this.checkmiles = function () {
    console.log(distance_travelled)
  }

}

// var car = new vehicleConstructor('Truck',4,1)
var bike = new vehicleConstructor('CBR600',2,1,155)
// var bus = new vehicleConstructor('Magic School Bus',8,10)
// bus.pickUpPassenger = function(number) {
//   this.number_of_passangers += number
// }

// bike.makeNoise = function () {
//   console.log('ring,ring')
// }
// console.log(car)
bike.move()
// console.log
bike.checkmiles()
// console.log(bus)
// bus.pickUpPassenger(10)
// console.log(bus)
// bike.makeNoise()

// Have the Vehicle constructor also take in a "speed"
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance travelled by speed
// Add a method to the Vehicle called "move" that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

//-------------- CREATE AN OBJECT PART III -----------------

function vehicle(name, number_of_wheels, number_of_passangers, speed) {

  this.name = name
  this.number_of_wheels = number_of_wheels
  this.number_of_passangers = number_of_passangers
  this.speed = speed
  this.makeNoise = function() {}

  vehicle.prototype.generateVin = function() {
    this.vin = ''
    for (var i = 0; i < 10; i++) {
      this.vin += (Math.floor((Math.random() * 10) + 1))
    }
    console.log('VIN#',this.vin);
  }

  vehicle.prototype.getVin = function () {
    console.log(this.vin);
    return this.vin;
  }

  var self = this
  var distance_travelled = 0
  var update_Distance_Travelled = function () {
    distance_travelled += self.speed
  }

  this.move = function () {
    update_Distance_Travelled()
    this.makeNoise()
  }

  this.checkmiles = function () {
    console.log(distance_travelled)
  }

}

// var car = new vehicleConstructor('Truck',4,1)
var bike = new vehicle('CBR600',2,1,155)
// var bus = new vehicleConstructor('Magic School Bus',8,10)
// bus.pickUpPassenger = function(number) {
//   this.number_of_passangers += number
// }

// bike.makeNoise = function () {
//   console.log('ring,ring')
// }
// console.log(car)
bike.move()
// console.log
bike.checkmiles()
bike.generateVin()
// bike.getVin()
// var test = bike.getVin()
// console.log(test)
// console.log(bus)
// bus.pickUpPassenger(10)
// console.log(bus)
// bike.makeNoise()

// Have each vehicle generate a random VIN number (study Math.random & Math.floor) -- also don't worry about duplicates for now
// Create an instance method (using prototype) that returns the VIN number
