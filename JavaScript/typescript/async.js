



function MyPromise(){
    return new Promise(function (res, rej) {
		
		setTimeout(function(){
			res('async task completed')
		}, 1000)
	})
}




async function doSomething() {
	let result = await MyPromise()
	return result
}

async function main() {

	// let result = await doSomething()
	//  console.log(result)


    doSomething().then(function(res){
        console.log(res)
    })
}

//main()


async function http(url){
    const result = await fetch(url)
    return result
}

async function fetchDataFromAPI() {
    const res = await http('https://reqres.in/api/users?page=2')
    const responseData = await res.json()
    console.log("API Response: ", responseData)
}

//https://www.scaler.com/topics/nodejs/node-js-fetch/

//fetchDataFromAPI()



//https://github.com/aircall/technical-test-backend-api
//https://github.com/aircall/meetup-madridjs-serverless
//https://github.com/aircall/aircall-expression-parser

//https://www.codewithyou.com/blog/how-to-implement-retry-with-exponential-backoff-in-nodejs

/*
async function postData() {
  //This data will be sent to the server with the POST request.
  const todoObject = {
    userId: 111,
    title: "Some title",
    completed: false
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(todoObject),
    headers: { 'Content-Type': 'application/json' }
  }

  const url = 'https://jsonplaceholder.typicode.com/todos';

  try {
    const response = await fetch(url, options)
    const jsonResponse = await response.json();
    console.log('JSON response', jsonResponse);
  } catch(err) {
    console.log('ERROR', err);
  }
}*/


async function httpRequest(url, options) {  

        try {
            const response = await fetch(url, options)

            console.log('Response: ', response.status)
            console.log('Response: ', response.headers)

            const jsonResponse = await response.json()        

            return jsonResponse
        }
        catch (error) {
            console.log('httpRequest error: ', error)
            throw error
        }

}


function retryWithExponentialBackoff(task, url, options, maxAttempts=5, baseDelay=1000) {
    let attempt = 1

    const execute = async () => {
        try {
            return await task(url, options)
        }    
        catch (error) {

            if (attempt>=maxAttempts) {
                throw error
            }
            
            const delay = baseDelay * 2 ** attempt

            console.log("retrying with delay ", delay)
            await new Promise((resolve)=>{
                setTimeout(resolve, delay)
            })

            attempt++
            return execute()
        }
    }

    return execute()
    
}



async function main() {

    const response = await retryWithExponentialBackoff(httpRequest, 'https://decodecode.info/api/users?page=2', {method: 'GET'})
    console.log("API response: ", response)
}

main()