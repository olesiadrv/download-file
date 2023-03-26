const http = require("https");
const fs = require("fs");

const filePath = "./t.txt";
const url = "https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt";

// 1
http.get(url, (res) => {
  const file = fs.createWriteStream(filePath);
  res.pipe(file);
  file.on("finish", () => {
    file.close();
    console.log("File downloaded");
  });
});

// 2
const data = fs.readFileSync("./t.txt").toString();
console.log(`Number of lines: ${data.split("\n").length}`);

// *
const reversed = data.split("").reverse().join("");
fs.writeFileSync("reversed-t.txt", reversed);
console.log("The reversed file is saved");
