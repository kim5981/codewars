/** 
 * Complete the solution so that it splits the string into pairs of two characters
 * If the string contains an odd number of characters then it should replace the missing second character
 * of the final pair with an underscore ('_').
 */

function solution(str){
  
    const letters = str.split( "" )
    const newArray = [];
    letters.reduce( ( index ) => {
      if( index % 2 === 0 ) {
        newArray.push( str.slice( index, index + 2 ) )
      } else if ( index % 2 != 0 ) {
          newArray.push( str.slice( index, "_" ) )
      }
    }, [] )
    return newArray;  
  }
  
  console.log(solution("hello" ) )
  