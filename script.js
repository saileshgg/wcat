#!/usr/bin/env node

const fs = require("fs");

//let data = fs.readFileSync("C:\\Users\\saile\\Documents\\GitHub\\wcat\\abc.txt","utf-8");

//fs.writeFileSync("def.txt","What is up nigga");

//console.log(data);

//process.argv-------------------------------------------------

let filename;

for (var i = 2; i < process.argv.length; i++) {
    filename = process.argv[i];
    let ans = fs.readFileSync(filename, "utf-8");
    console.log(ans);
}