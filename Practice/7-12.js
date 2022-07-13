/**
 * Complete the solution so that it reverses the string passed into it.
 */

 const solution = str => str.split("").reverse().join("")

 /**
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

 function solution(numbers){
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