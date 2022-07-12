// Write a function that converts a floating point number to a string.
function solution(f) {
    return String(f)
}

// Write a function that converts a string to an integer.
function solution(s) {
    return parseInt(s)
}

//Write a function that converts an integer to a floating point number.
function solution(i) {
    return parseFloat(i)
}

/*Write a function that converts a floating point number to a string
* with a specific number of digits past the decimal place 
*/

function solution(f, places) {
    return String(f.toFixed(places))
}

/**
 * Write a function that computes the absolute value of a number.
 * Solve this without using the built-in absolute value function.
 * -- Math.abs()
 */
 function solution(x) {
    return Math.sign(x) === 1 ? x : x * -1
}


/**
 * Write a function that returns true if a number is between 2 and 7,
 * exclusive. (That is, between 3 and 6, inclusive.)
 */

