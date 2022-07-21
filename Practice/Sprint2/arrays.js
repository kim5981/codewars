// Return the number of occurrences of v in array a
// If the array is empty, return 0.

function occurrencesOfV(a, v){
    if(a.length < 1){
        return 0
    }
    
    let counter = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] === v)
        counter += 1
    }
    return counter
}


/**
 * Construct a string of p copies of n capital "A"s and m capital "B"s.
 * 
 * Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.
 * 
 * Copy numbers begin with 0 for the first copy.
 * 
 * Do not use any built-in string duplication functionality to solve this.
 * 
 * Example:
 * 
 * Input: 
 * p = 3   n = 1    m = 1
 * 
 * Output:
 * "XXXABAB"  (would be "ABABAB", but the one in the 0th place is evenly divisible by 3)
 * 
 */

 function makeString(num, l){
    let str = ""
    for(let i=0; i<num; i++){
        str += l
    }
    return str
}

function copiesOfStrings(p, n, m) {
    let strA = makeString(n, "A")
   
    let strB = makeString(m, "B")
    
    let strAB = strA + strB
    
    let strX = makeString(p, "X")
   
    let strPAB = ""
    
    for(let i=0; i < p; i++){
        if(i % 3 === 0)
            strPAB +=  strX; 
        else 
        strPAB += strAB;
    }
    
    return strPAB;   
}

//Given an array and a value x, return an array 
//with all the elements of the original except those with value x.

function excludeX(a, x) {
    const result = []
    a.map(n =>{
        if(n != x)
        return result.push(n) 
    })
    return result
}

/**
 * Given an input array a and a second array, filter_array, 
 * produce a new array that contains only the elements of a that are not in filter_array
 * 
 * The elements in the result array should be in the same order that they appeared in array a.
 * 
 * Ex:
 * a = [1, 7, 2, 10, 7]
 * b = b == [2, 7]
 * 
 * Output: [1, 10]
 */

function filterArray(a, filterList){
    const arr = []
    for (let num of a){
        if(!filterList.includes(num)) arr.push(num);
    }
    return arr;
}


function filterArray2(a, filterList){
    return a.filter(num => !filterList.includes(num))
}

// Produce an array of n strings.
// Each string will contain m uppercase "A"s.

function nStringOfA(n, m){
    let str = ""
    for(let i = 0; i < m; i++){
        str += "A"
    }
    let arr = Array(n).fill(str)
    return arr
}

/**
 * You are given an array of positive integers arr. 
 * You'd like to know how many triangles can be formed with side lengths equal to adjacent elements from arr.
 *  
 * Construct an array of integers of length arr.length - 2, 
 *  where the ith element is equal to 1 if it's possible to form a triangle
 * with side lengths arr[i], arr[i + 1], and arr[i + 2], otherwise 0.
 * 
 * Return the resulting array of integers.
 * 
 * Note: A triangle can be formed with side lengths a, b, and c if:
 * 
 *  a + b > c,   a + c > b,     and b + c > a.
 * 
 * Ex:
 * For arr = [1, 2, 2, 4], the output should be solution(arr) = [1, 0]
*/

// making a function to test to see if a, b, & c meet parameters 
function isTriangle(a, b, c){
    if( 
        a + b > c
        && a + c > b 
        && b + c > a ) return 1;
        return 0;
}

function triangularArray(array){
    const res = []
    // arr.length - 2 bc you only want loop to continue if you can test a & b with i
    for(let i=0; i < array.length - 2; i++){
        let a = array[i]
        let b = array[i + 1]
        let c = array[i + 2]
    res.push(isTriangle(a, b, c))
    }
    return res
}

/**
 * For an array a and an integer t (0 ≤ t < a.length),
 *  let's define cyclic t-shift operation as carrying t elements from the beginning of the array to the end
 * 
 * For example, applying cyclic t-shift to a = [1, 2, 3, 4] 
 * can turn it into four different arrays:
 * 
 * [1, 2, 3, 4] (0-shift),
 * [2, 3, 4, 1] (1-shift: one element from the beginning, i.e. 1, was carried to the end),
 * [3, 4, 1, 2] (2-shift: two elements, i.e. 1, 2, were carried to the end),
 * [4, 1, 2, 3] (3-shift: 1, 2, 3 were carried to the end)
 * 
 * Given an array of integers elements, find such t (0 ≤ t < elements.length) that
 * cyclic t-shift operation turns elements into a sorted array 
 * [1, 2, ..., elements.length]
 * 
 * If there is no such t, return -1.
 */

 function isInOrder(arr){
    // arr.length - 2 bc there's no # after last index
    for(let i = 0; i < arr.length - 1; i++){
        const current = arr[i]
        const next = arr[i + 1]
        if( current + 1 !== next) return false;
    }
    return true;
}

function cyclicShift(arr){
    const first = arr.shift() // removes the first item in array and returns what was removed
    arr.push(first)
}

function shiftsSolution(elements) {
    let count = 0;
    // see if array is in order with fn
    // if not, shift the #'s
    for(let i = 0; i < elements.length; i++){
        // if it's in order, shift count is still 0 and we can return count as is
        if(isInOrder(elements)) return count;
        cyclicShift(elements)
        count += 1
    }
    // still hasn't gotten in order after loop, can return - 1
    return -1
}

/**
 * You are given an array of integers digits representing the digits of a positive integer.
 * 
 * For example, digits = [1, 2, 3] represents the integer 123.
 * 
 * It is guaranteed that digits does not have any leading zeros.
 * 
 * Assuming that digits represents the integer n, 
 * your task is to return an array that represents the integer n + 1.
 * 
 * Example 1:
 * digits = [1, 2, 3]
 * solution(digits) = [1, 2, 4]
 * 
 * Example 2:
 * digits = [9, 9, 9]
 * solution(digits) = [1, 0, 0, 0]
 */

//* does not work for large numbers **//
function digitsSoln1(digits){
    
    let str = digits.join("")

    let num = parseInt(str)
    num = num + 1

    let numStr = String(num)

    const newDigits = []
    for(let i=0; i < numStr.length; i++){
        newDigits.push(parseInt(numStr[i]))
    }
   
    return newDigits
}

// accounts for arr [9, 9, 9, 9] , all edge cases
function digitsSoln2(digits){
    // carryOver tells function to add one at the end of loop or not
    let carryOverOne = false
    // work backwards through digits array
    for(let i = digits.length - 1; i >= 0 ; i--){
        const digit = digits[i]
        const digitCounter = digit + 1
        // if digits[i] + 1 = 10 (or if it's equal to 9)
        if(digitCounter === 10){
            // set it's value to 0
            digits[i] = 0   
            carryOverOne = true    
        } else {
            digits[i] = digitCounter
            carryOverOne = false
            break;
        }
    }
    if(carryOverOne) digits.unshift(1)
    return digits
}


/**
 * Given two binary strings a and b, add them together and return the resulting string.
 * 
 * For a = "1000" and b = "111", the output should be
 * solution(a, b) = "1111";
 * 
 * For a = "1" and b = "1", the output should be
 * solution(a, b) = "10".
 * 
 * Avoid using built-in big integers to solve this challenge.
 */



