
//import {Handler} from 'aws-lambda'



const MyLibrary = (filename: string)=>{
    console.log("MyLibary called")
    return new Promise((resolve, reject)=>{               
        setTimeout(()=>{
            console.log("File compressed: ", filename)
            return resolve('true')
        }, 5000)
    })
}

const compressFile = async (filename: string)=>{
    console.log('compressFile called')
    const lib = await MyLibrary(filename)
    return lib
}




export const handler = async (event: any, context:any)=>{

    console.log('lambda executed, event:', event)

    
    const promiseList = event.body.files.map((filename: string)=>{
        return compressFile(filename)
    })

    await Promise.all(promiseList)
    
    return {'success': true}
}