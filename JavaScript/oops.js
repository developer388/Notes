/*  Constructor Function based Object Oriented Programming 
		
	1. Works on prototype chain based inheritance
	2. Object can be created from a constructor function using new operator
	3. Parent can be set using FunctionName.prototype
    4. If a key is not found in child object, it is looked up above in the
       prototype chain
    5. Class or Static variable can be defined using FunctionName.property_name
*/ 


// Setting prototype of an object
let Dog = {'name': 'champ', 'color': 'brown', 'breed': 'bulldog' }
let Camie = {}

Object.setPrototypeOf(Camie, Dog)
console.log(Camie.breed) // Camie is inheriting Dog


// Setting prototype of constructor function
function Car(model, make_year, color) {
	this.model = model
	this.make_year = make_year
	this.color = color
}

Car.prototype.getInfo = function() {
	return `Car Info: ${this.model}, ${this.model}, ${this.color} `
}

let eon = new Car('Eon', 2015, 'Red')
console.log(eon.getInfo())
console.log(eon.model)


// Defining private property inside a constructor function





// Defining Class or a Static variable in constructor function
Car.version = '1.0.1'
console.log(Car.version) // only available on FunctionName not on Objects


/*  Class based Object Oriented Programming 
	
	1. By default variable defined in class scope are instance variables or methods
	2. Class or Static variables and methods can be defined using static keyword
	   Outside the class they can be defined using class_name.property_name
	3. Private variable or a method can be defined by prepending # symbol before variable
	   or class name
	4. Getter and Setter functions can be defined by get and set keywords
	5. A class can extend another class by using extends keyword
*/ 


// Defing instance variables and methods
class Intestellar {

	release_year = 2015 // instance_variable
	rating = 9.0         

	getInfo () {        // instance_method
		return `Movie Name: Intestellar, Release Year: ${this.release_year}`
	}
}


let intestellar = new Intestellar()

console.log(intestellar.release_year)
console.log(intestellar.rating)
console.log(intestellar.getInfo())


// Defing class/static variables and methods
class IronMan {
    static make = 'Marvels'
	release_year = 2011 // instance_variable
	rating = 9.0         

	getInfo () {        // instance_method
		return `Movie Name: Iron Man, Release Year: ${this.release_year}`
	}

	static getMake () {
		return 'Make: '+ IronMan.make
	}
}

console.log(IronMan.make)
console.log(IronMan.getMake())

// Defing class/static variable outside of the class

class IronMan2 {
    
}

IronMan2.make = 'Marvels'
IronMan2.getMake = function() {
	return 'Make:  '+ IronMan2.make
}

console.log(IronMan2.make)
console.log(IronMan2.getMake())

// Defining private property inside a class

class IronMan3 {

	#make = 'Marvels'
	
	// #insided() {
	// 	return 'Private'
	// }

	getMake() {
		return this.#make
	}

}

let iron_man3 = new IronMan3()

console.log(iron_man3.make) // undefined
console.log(iron_man3.getMake())
//console.log(iron_man3.insided())


// Defining getter setter inside a class

class IronMan4 {

	make = 'Marvels'
	
	get make () {
		return this.make
	}

	set make (val) {
		this.make = val
	}

}

let iron_man4 = new IronMan4()

console.log(iron_man4.make) 
iron_man4.make = 'As'
console.log(iron_man4.make) 


