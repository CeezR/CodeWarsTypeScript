"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("./solution");
const chai_1 = require("chai");
function testSolution(input, expectedOutput) {
    const actualOutput = solution_1.Challenge.solution(input);
    chai_1.assert.strictEqual(actualOutput, expectedOutput, `Input: ${input}`);
}
describe('solution', () => {
    it('should return 0 for input 0', () => {
        testSolution(0, 0);
    });
    it('should return 0 for input 3', () => {
        testSolution(3, 0);
    });
    it('should return 23 for input 10', () => {
        testSolution(10, 23);
    });
    // Add additional test cases as needed
});
