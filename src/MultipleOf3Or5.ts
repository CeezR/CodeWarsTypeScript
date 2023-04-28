export default function solution(number: number) {
    let numbers: number[] = [];
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        numbers.push(i);
      }
    }
    const sum = numbers.length < 2 ? 0 : numbers.reduce((a, b) => a + b);
    return sum;
  }