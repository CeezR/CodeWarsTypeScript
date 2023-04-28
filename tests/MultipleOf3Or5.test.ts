import solution  from '../src/MultipleOf3Or5';
import { assert } from 'chai';

function testSolution(input: number, expectedOutput: number) {
    const actualOutput = solution(input);
    assert.strictEqual(actualOutput, expectedOutput, `Input: ${input}`);
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