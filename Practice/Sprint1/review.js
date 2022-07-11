// Write a function that returns the sum of two numbers.

 function solution(arg1, arg2) {
    return arg1 + arg2
}


// Write a function that returns the product of two numbers.
function solution(arg1, arg2) {
    return arg1 * arg2
}

/**
 * Write a function that performs a sequence of mathematical operations by reassigning the results into the same variable.

Even though this could be a one-liner, only use a single additional variable for this, and do each step as an independent operation.

Add 7 to the number.
Divide the result by 2 (the result could be fractional).
Multiply that result by 5.
Return the result.
 */

function solution(n) {
    n = n + 7
    n = n / 2
    n = n * 5
    return n
}

/**
 * Write a function that computes the sum of all values between 1 and n, inclusive.

There is a formula you can use to compute this:

total = n * (n + 1) / 2
 */

function solution(n) {
    let total = n * (n + 1) / 2
    return total
}

