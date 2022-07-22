
/** -- Reverse String
 * 
 * Complete the solution so that it reverses the string passed into it.
 */

 const revSolution = str => str.split("").reverse().join("")

 /**
  * -- Is It A Zig-Zag?
  * 
  * Let's say a triple (a, b, c) is a zig-zag if either
  * a<b>c OR a>b<c
  * 
  * Given an array of integers (numbers), check all the triples
  * of its consecutive elements for being a zig-zag
  * 
  * More specifically, construct an array of length numbers.length - 2
  * where the ith element of th output array equals 1 if the triple
  * (numbers[i], numbers[i+1], numbers[i+2]) is a zig-zag, and a 0 otherwise
  */

 function isZigZag(a,b,c){
    if( (a > b && b < c) || (a < b && b > c)){
        return 1
    }
    return 0
 }

 function zigZagsolution(numbers){
    const soln = [] // push the results to empty array

    for( let i=0; i < numbers.length - 2; i++){
        //store n's in variables for comparison
        const a = numbers[i]
        const b = numbers[i+1]
        const c = numbers[i+ 2]

        soln.push(isZigZag(a,b,c))
    }
    return soln
 }

 /**
  * -- Strictly Ascending 
  * 
  * You are given an array of integers (a)
  * 
  * A new array (b) is generated by rearranging elements of a like so:
  * 
  * b[0] = a[0]
  * b[1] = last element of a 
  * b[2] = a[1]
  * b[3] = second to last element of a
  * b[4] = a[2]
  * b[5] = 3rd last element of a, and so on..
  * 
  * Your task is to determine whether b is sorted in strictly ascending order or not
  * 
  * Ex:
  * 
  * For a = [1, 3, 5, 6, 4, 2]
  * output should be solution(a) = true
  * because the new array (b) would look like
  * [1, 2, 3, 4, 5] which is in strictly ascending order
  */

 function isAscending(a){
    for(let i=0; i < a.length - 1; i++){
        const currentNum = a[i]
        const nextNum = a[i + 1]
        if( currentNum >= nextNum){
            return false
        }
        return true
    }
 }

 function ascSolution(a){
    let start = 0
    let end = a.length - 1 
    const b = []
    while(start <= end){ // loop through while start is <= end
        if(start === end){ // it will be equal if a has an odd number, at the center index
            b.push(a[start])
        } else {
            b.push(a[start]) // continuously push i's at start from 0
            b.push(a[end]) // and at end 
        }
        start++ // increment/ decrement e/ time to get to the middle
        end-- 
    }
    return isAscending(b)
 }

 // -- Strictly Alphabetical Order
 
 // Check if a given string is in strictly alphabetical order
  
 function strictlyAlphabetical(s){
    for(let i=0; i<s.length-1; i++){
        const current = s[i]
        const next = s[i +1]
        if(current.charCodeAt(0+1) !== next.charCodeAt(0)){
            return false
        }
        return true
    }
 }