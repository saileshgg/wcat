#!/usr/bin/env node

const fs = require("fs");

//let data = fs.readFileSync("C:\\Users\\saile\\Documents\\GitHub\\wcat\\abc.txt","utf-8");

//fs.writeFileSync("def.txt","What is up nigga");

//console.log(data);

//process.argv-------------------------------------------------

let filename = process.argv[2];

let ans = fs.readFileSync(filename,"utf-8");
console.log(ans);