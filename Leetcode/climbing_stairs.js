/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1, second = 1, sum = 0; // case of 2 steps

    if (n < 2)
        return n;

    // start with 2 steps, iterate to nth
    /**
     * With each loop, add each step to the last. 1 + 1 = 2 + 1 = 3 + 2 = 5 + 3 = 8  etc
     */
    for (let i = 2; i <= n; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
};

climbStairs(8)