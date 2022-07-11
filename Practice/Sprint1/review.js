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


/**
 * From the year you were born until now is a certain number of years. 
 * What year was it that many years before your birth year?

For example, if a person was born in 2000 and it is now 2021, their "flip year" would be 1979.
(Because they are 21 years old, and there are 21 years between 1979 and 2000.)
 */

function solution(birthYear, currentYear) {
    let age = currentYear - birthYear
    let flipYear = birthYear - age
    return flipYear
}


/**
 * Write a function that computes the sum of all values between n and m, inclusive.

There is a formula you can use to compute the sum from 1 to n:

total = n * (n + 1) / 2
But we've misplaced the formula for the sum from n to m!

Think outside the box... is there some way to use that formula, n, and m to get the answer? 
You don't have to come up with a new formula; there's a way to use the existing one to solve it.
 */

function solution(n, m) { 
    return ((m-n) + 1) * (m+n) / 2
}

