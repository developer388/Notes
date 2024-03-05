"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LambdaFunction_1 = require("./LambdaFunction");
console.log("HandlerResult: ", (0, LambdaFunction_1.handler)({ body: { "files": ["file1.jpg", "file2.jpg", "file3.jpg", "file4.jpg"] } }, {}));
