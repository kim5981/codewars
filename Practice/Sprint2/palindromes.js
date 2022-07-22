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

 function isNPalindrome(n){
    const checkN = String(n).padStart(6, "0")
    const palindrome = String(checkN).split("").reverse().join("")
    return checkN === palindrome
}


