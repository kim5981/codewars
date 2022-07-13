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
 function solution(n) {
    return n > 2 && n < 7 ? true : false
 }

 /**
  * Normally, dividing by zero is a bad thing that will cause programs to crash.
  *  Write a safer division function that returns the division of two numbers
  *  unless the denominator is 0, in which case it should return 0 instead of crashing.
 */

  function solution(numerator, denominator) {
    return denominator === 0 ? 0 : numerator/denominator 
}

/** 
 * Return the largest of six numbers.
Do not use any built-in maximum value function to solve this!
*/

function solution(a, b, c, d, e, f) {
    let nums = [a, b, c, d, e, f]
    let result = nums.reduce((acc, n) => {
        console.log(`this is n: ${n}`)
        console.log(`this is acc: ${acc}`)
        return acc === null || n > acc ? n : acc
    }, null) // starting at null for negative values
    return result
}


console.log(solution(1,2,3,4,5,6))


