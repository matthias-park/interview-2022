const { twoSum } = require("./2sum");

const testCases = [
{
    nums: [2,7,11,15],
    target: 9,
    expected: [0,1]
}]

const result = testCases.reduce((acc, c) => {
    return (JSON.stringify(twoSum(c.nums, c.target)) == JSON.stringify(c.expected)) && acc;
}, true);

console.log(`Your solution was ${result ? 'accepted' : 'rejected'}`)