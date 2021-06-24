'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hackerlandRadioTransmitters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY x
 *  2. INTEGER k
 */

function hackerlandRadioTransmitters(x, k) {
    // Write your code here
    let length = x.length;
    let count = 0;

    if (length < 1) return 0;

    x.sort((a, b) => a - b);

    let mid = 0;
    let end = 0;

    for(let i = 0; i < length;) {
        mid = x[i] + k;
        while(i < length && mid >= x[i]) i++;
        count++;
        if(i < length) {
            end = x[i - 1] + k;
            while(i<length && end >= x[i]) i++;
        }
    }

    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const x = readLine().replace(/\s+$/g, '').split(' ').map(xTemp => parseInt(xTemp, 10));

    const result = hackerlandRadioTransmitters(x, k);

    ws.write(result + '\n');

    ws.end();
}
