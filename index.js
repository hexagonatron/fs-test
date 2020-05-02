const fs = require('fs');
const path = require("path");

// const rootDirPath = path.join(process.cwd(), "..",);
const pathToConfig = path.join(process.cwd(), "config1.json");
console.log(pathToConfig);

const loadSavedData = async () => {
    return new Promise((res, rej) => {
        fs.readFile(pathToConfig, "utf-8", (err, data) => {
            if(err){
                console.log(err);
                console.log(`Error code = ${err.code}`);
                if(err.code === "ENOENT"){
                    console.log("No File =D =D");
                }

                res([]);

            } else {
                try {
                    res(JSON.parse(data));
                } catch (err) {
                    res([]);
                }
            }
        });
    })
}

(async function test(){
    const data = await loadSavedData();
    
    console.log(data);
    
    data.push({This:"Thingo",Another_thing:"Thingy"});
    
    console.log(data);
    
    dataText = JSON.stringify(data);
    
    fs.writeFile("./config1.json", dataText, "utf-8", (err) => {
        if(err) console.log(err);
    });
})()