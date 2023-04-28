import reverseWords from "../src/ReverseWords";
import { assert } from "chai";

function testSolution(input: string, expectedOutput: string) {
    const actualOutput = reverseWords(input);
    assert.strictEqual(actualOutput, expectedOutput, `Input: ${input}`);
}

describe('reverseWords', () => {
    it('This is an example! ==> sihT si na !elpmaxe', () => {
        testSolution("This is an example!", "sihT si na !elpmaxe");
      });
});