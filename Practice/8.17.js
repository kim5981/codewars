// //* -- Symmetric Difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
//Symmetric difference is a binary operation, which means it operates on only two elements. 
//So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time
//Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values (no duplicates).

function sym(arr1, arr2) {
  const unique = []
  const a = arr1
  const b = arr2

  b.forEach(n => {
    if(!a.includes(n))
      unique.push(n)
  })
  a.forEach(n => {
      if(!b.includes(n))
        unique.push(n)
  })

  return removeRepeats(unique)
}

function removeRepeats(arr){
  const unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
}

const arr1 = [1,2,3]
const arr2 = [5,2,1,4]


console.log(sym(arr1, arr2))
