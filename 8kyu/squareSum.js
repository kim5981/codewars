// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let res = numbers.map(n => n * n )
    .reduce((total, val) => {
    return total + val
    }, 0)  
   
  return res
  }

console.log(squareSum([1, 2, 2]))