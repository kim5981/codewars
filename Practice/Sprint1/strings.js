/**
 * Compute the factorial of an integer n. This is commonly written as n!, which is read as "n factorial".

You must use a loop to solve this problem. You cannot hard-code the answers.

The factorial of a number is the product of every integer between 1 and n.

Special case: the factorial of 0 is defined to be 1.
 */

function factorial(n) {
    let current = 1;
    for (let i = 1; i <= n; i++) {
       current *= i;
    }
    return current
}

console.log(factorial(5))

//Compute the product of all numbers from a to b, inclusive.

function productOfAllNums(a, b){
    return null
}