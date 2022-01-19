const fs = require("fs");

let data = fs.readFileSync("abc.txt","utf-8");

fs.writeFileSync("def.txt","What is up nigga");

console.log(data);