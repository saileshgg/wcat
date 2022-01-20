#!/usr/bin/env node

const fs = require("fs");

//let data = fs.readFileSync("C:\\Users\\saile\\Documents\\GitHub\\wcat\\abc.txt","utf-8");

//fs.writeFileSync("def.txt","What is up nigga");

//console.log(data);

//process.argv-------------------------------------------------

let processData = process.argv;
let filename;

if (processData[2] === "w") {
    fs.writeFileSync(processData[3], processData[4]);
    let ans = fs.readFileSync("abc.txt", "utf-8");
    console.log("This is file after write operation" + "\n" + ans);
} else if (processData[2] === "a") {
    let previousData = fs.readFileSync(processData[3], "utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" + processData[4]);
} else {
    let ans = "";
    let iUpdate = false;
    for (var i = 2; i < processData.length; i++) {
        if (processData.includes("ne")) {
            if(!iUpdate) {
                i = i+1;
                iUpdate = true;
            }
            
            let tempData = fs.readFileSync(processData[i],"utf-8");
            let lines = tempData.split("\n");
            if(tempData.includes("\r")) {
                tempData.split("\r\n");
            }
            
            let finalData = "";
            for(var i=0;i<lines.length;i++) {
                if(lines[i] != "") {
                    finalData += lines[i] + "\n";
                }
            }
            ans += finalData;
        } else {
            
            ans += "\n" + fs.readFileSync(processData[i], "utf-8");

        }

    }
    console.log(ans);
}