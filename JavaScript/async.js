

async function doSomething() {
	let result = await new Promise(function (res, rej) {
		
		setTimeout(function(){
			res('async task completed')
		}, 1000)
	})

	return result
}

async function main() {

	let result = await doSomething()
	console.log(result)
}

main()


function* generateSequenceGenerator() {
	yield 1
	yield 2
	yield 3
	yield 4
	yield 5
	return 6
}

let generator = generateSequenceGenerator()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
