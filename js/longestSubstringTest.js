const { lengthOfLongestSubstring } = require("./longestSubstring");

const testCases = [
{
    string: "abcabcbb",
    expected: 3
}]

const result = testCases.reduce((acc, c) => {
    return (lengthOfLongestSubstring(c.string, c.target) == c.expected) && acc;
}, true);

console.log(`Your solution was ${result ? 'accepted' : 'rejected'}`)