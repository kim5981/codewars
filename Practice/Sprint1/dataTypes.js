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
