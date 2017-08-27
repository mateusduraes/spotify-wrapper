const sum = (...nums) => nums.reduce((previous, current) => previous + current, 0);
const sub = (...nums) => nums.reduce((previous, current) => previous - current);
const div = (num1, num2) => (num2 === 0 ? 'cannot divide by zero' : num1 / num2);
const mult = (...nums) => nums.reduce((previous, current) => previous * current);

export { sum, sub, div, mult };
