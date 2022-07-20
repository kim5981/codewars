// Return the number of occurrences of v in array a
// If the array is empty, return 0.

function occurrencesOfV(a, v){
    if(a.length < 1){
        return 0
    }
    
    let counter = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] === v)
        counter += 1
    }
    return counter
}


/**
 * Construct a string of p copies of n capital "A"s and m capital "B"s.
 * 
 * Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.
 * 
 * Copy numbers begin with 0 for the first copy.
 * 
 * Do not use any built-in string duplication functionality to solve this.
 * 
 * Example:
 * 
 * Input: 
 * p = 3   n = 1    m = 1
 * 
 * Output:
 * "XXXABAB"  (would be "ABABAB", but the one in the 0th place is evenly divisible by 3)
 * 
 */

 function makeString(num, l){
    let str = ""
    for(let i=0; i<num; i++){
        str += l
    }
    return str
}

function copiesOfStrings(p, n, m) {
    let strA = makeString(n, "A")
   
    let strB = makeString(m, "B")
    
    let strAB = strA + strB
    
    let strX = makeString(p, "X")
   
    let strPAB = ""
    
    for(let i=0; i < p; i++){
        if(i % 3 === 0)
            strPAB +=  strX; 
        else 
        strPAB += strAB;
    }
    
    return strPAB;   
}
