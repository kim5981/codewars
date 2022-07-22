/**         ODOMETER PALINDROME
 * An odometer palindrome is the when the mileage on your odometer is the 
 * same when the digits are reversed. 
 * 
 * Assume your odometer is 6 digits and does not show 10ths of miles/kilometers.
 * 
 * For a given current odometer reading, when is the next odometer palindrome?
 * 
 * If the odometer is currently at a palindrome, we're still interested in the next one.
 * 
 * The input is an integer, but the result should be a string padding with leading zeros to 6 places.
 * 
 * -- Example 1
 * Input:               Output: 
 * current = 37         "001100"
 * 
 * -- Example 2
 * 
 * Input:               Output: 
 * current = 123320     "123321"
 * 
  * -- Example 3
 * 
 * Input:               Output: 
 * current = 999999     "000000"
 */

 function isNumPalindrome(n){
    const checkN = String(n).padStart(6, "0")
    const palindrome = String(checkN).split("").reverse().join("")
    return checkN === palindrome
}

function odometerPalindrome(current) {
    if(current === 999999) return "000000"
    current ++
    while(!isNumPalindrome(current)) current ++
    return String(current).padStart(6, "0")
  }


  /**
   * -- Multiplication Table 
   * Write a function that builds an n x n multiplication table.
   * 
   * The result will be a 2D array. The 0th row and column of the table begin with 1 and end with n.
   * 
   * Example:
   * 
   *  Input:                Output:
   * 
   *  n = 4                 [
                                [1, 2,  3,  4],
                                [2, 4,  6,  8],
                                [3, 6,  9, 12],
                                [4, 8, 12, 16]
                            ]
   */

    function multiTable(n) {
        const outerArr = []
        
        for(let i = 1; i <= n; i++){
            const row = []
            
            for(let j=1; j <= n; j++){
                row.push(i*j)
            }
            outerArr.push(row)
        }
        return outerArr
    }
                                                   