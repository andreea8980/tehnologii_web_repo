//ex1
import{a,greet }from './modul.js';
console.log("value of const: ", a);
console.log(greet("andreea"));

//ex2
import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";

const dirPath = path.join(".", "Fisier");
const filePath = path.join(dirPath, "test.txt");

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("Director creat:", dirPath);
}

fs.writeFileSync(filePath, "acesta este un fisier");
console.log("fisier creat:", filePath);

rimraf(dirPath)
    .then(() => console.log("director sters:", dirPath))
    .catch(err => console.error("eroare", err));

    