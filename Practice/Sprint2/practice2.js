/**
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
