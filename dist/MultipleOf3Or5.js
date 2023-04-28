"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(number) {
    let numbers = [];
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbers.push(i);
        }
    }
    const sum = numbers.length < 2 ? 0 : numbers.reduce((a, b) => a + b);
    return sum;
}
exports.default = solution;
