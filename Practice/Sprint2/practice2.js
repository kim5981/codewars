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
