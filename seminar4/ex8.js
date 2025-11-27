const fs = require('fs');
const path = require('path');

function runLengthEncode(inputString) {
    if (!inputString || inputString.length === 0) {
        return "";
    }

    let compressed = "";
    let count = 1;

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        const nextChar = inputString[i + 1];

        if (currentChar === nextChar) {
            count++;
        } else {
            compressed += count + currentChar;
            count = 1;
        }
    }
    return compressed;
}

function compressFileRLE(inputFilePath, outputFilePath) {
    try {
        const inputData = fs.readFileSync(inputFilePath, 'utf8');
        
        const compressedData = runLengthEncode(inputData);
        fs.writeFileSync(outputFilePath, compressedData, 'utf8');

        console.log(`fis a fost comprimat cu succes`);
    } catch (error) {
        console.error("eroare", error.message);
    }
}

const inputFileName = 'input.txt';
const outputFileName = 'output_rle.txt';

const inputPath = path.join(__dirname, inputFileName);
const outputPath = path.join(__dirname, outputFileName);

compressFileRLE(inputPath, outputPath);