/**
 * -- 2D ARRAY 
 * 
 * Create a 2D array of size row_count x col_count. 
 * Fill the array with 0.
 * 
 * Ex:
 * Input:
 * 
 * rows == 2
    cols == 3

    Output: 
    [
    [0, 0, 0],
    [0, 0, 0]
]
 */

function twoDimensionalArray(rowCount, colCount) {
    const array = []
    for(let i = 0; i < rowCount; i++){
        let row = Array(colCount).fill(0)
        array.push(row)
    }
    return array
}

/**
 * -- IDENTITY MATRIX
 * 
 * Create a square 2D array of size size x size. Fill the array with 0.
 * 
 * Then draw a line of 1s down the main diagonal. (an identity matrix)
 * 
 * Example:
 * 
 * Input:   size == 4
 * 
 * Output:
 * 
 * [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]
 * 
 */

function identityMatrix(size) {
    const array = []
    for(let i = 0; i < size; i++){
        const row = []
        for(let j = 0; j < size; j++){
            if(i === j) row.push(1); // both start at same #, where they intersect is where you place 1
            else row.push(0)
        }
        array.push(row)
    }
    return array
}


/** -- Code in Bug
 * There is a bug in one line of the code. Find it, fix it, and submit.
 * 
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * 
 * Example:
 * 
 * Input:
 * 
 * picture = ["abc",
              "ded"]

 * Output:
    solution(picture) = ["*****",
                         "*abc*",
                         "*ded*",
                         "*****"]    
 */

function starsBorder(picture){
    function solution(picture) {

        // correction --> var answer = ['**'];
        var answer = [''];
      
        for (var i = 0; i < picture[0].length; i++) {
          answer[0] += '*';
        }
      
        for (var i = 0; i < picture.length; i++) {
          answer.push('*');
          for (var j = 0; j < picture[0].length; j++) {
            answer[i + 1] += picture[i][j];
          }
          answer[i + 1] += '*';
        }
      
        answer.push(answer[0]);
      
        return answer;
      }
      
}

/** -- Substring 
 * Return a substring (part of a string) between two indexes.
 * The substring from index a up to (but not including) index b should be returned.
 * 
 * If a is less than 0, treat it like 0.
 * If b is greater than the length of the string, treat it like the length of the string.
 * If b is less than a, return an empty string.
 * 
 * Ex:
 * Input:

    s == "abcde"
    a == 2
    b == 4

 * Output:  "cd"
 */

    function subString(s, a, b) {
        if(a < 0) a = 0;
        if(b > s.length) b = s.length;
        return s.slice(a, b)
    }
    

