import {handler} from './LambdaFunction'

console.log("HandlerResult: ", handler({body:{"files":["file1.jpg", "file2.jpg", "file3.jpg", "file4.jpg"]}}, {}))