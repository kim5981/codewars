/**
 * Take an array and remove every second element from the array
 * Always keep the first element and start removing with the next element.
 * 
 * Example:
 * ["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
 * 
 * becomes --> ["Keep", "Keep", "Keep", ...]
 * 
 */


  function removeEveryOther(arr){
    arr.forEach((item, index) => {
        arr.splice(index + 1, 1)
    })
    return arr
  }

 
  //for tests
//   const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const test2 = ["hello", "goodbye", "hello again"]
//   const test3 = [1,2]
//   console.log(removeEveryOther(test3))