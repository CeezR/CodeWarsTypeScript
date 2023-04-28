"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
    static solution(number) {
        let numbers = [];
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                numbers.push(i);
            }
        }
        const sum = numbers.length < 2 ? 0 : numbers.reduce((a, b) => a + b);
        return sum;
    }
    static main() {
        console.log(Challenge.solution(10));
    }
}
exports.Challenge = Challenge;
Challenge.main();
