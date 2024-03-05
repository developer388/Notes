
function first_decorator (msg: string){ 
	
	console.log('first_decorator outer function called')
	
	return function decorator(constructor: Function){
		console.log('decorator1 called', msg)
	}
}


function second_decorator (msg: string){ 
	
	console.log('second_decorator outer function called')
	
	return function decorator(constructor: Function){
		console.log('decorator2 called', msg)
	}
}



@first_decorator('dec1')
@second_decorator('dec2')
class Person {
	constructor(){
		console.log('constructor() called, object creation in progress')
	}
}


// const person = new Person()
