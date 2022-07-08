/**
 * Wolves have been reintroduced to Great Britain. 
 * You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
 * Fortunately, you are good at spotting them.
 * 
 * Warn the sheep in front of the wolf that it is about to be eaten.
 * Remember that you are standing at the front of the queue
 * which is at the end of the array:
 * 
 * [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

   If the wolf is the closest animal to you, return:
    "Pls go away and stop eating my sheep"

   Otherwise, return:
    "Oi! Sheep number N! You are about to be eaten by a wolf!"
    -- where N is the sheep's position in the queue. --

    ** Note: there will always be exactly one wolf in the array. **

    Ex 1:
    Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
    Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

    Ex 2:
    Input: ["sheep", "sheep", "wolf"]
    Output: "Pls go away and stop eating my sheep"
   */

    

function warnTheSheep(q) {
    let res
    let wolf = q.length - 1
    q.map(sheep => {
      if(
        sheep === "wolf" 
         && q.indexOf(sheep) === wolf
      ){
      res = "Pls go away and stop eating my sheep"
      } else {
        
        const reverse = () => {
          q.forEach((sheep, index) => {
          return sheep = index + 1
        })
        return q.reverse()
        }
        
        q.map( (sheep, index) => {
          if (sheep === "wolf"){
            // set watchOut to wolf's index + 1
            let watchOut = index + 1
            // set the index of that equal the content 
            // to that of the index in the reverse fn
            
            // use that for res
            
          }
        })
        
          
        
        res = `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
        
      }
    })
    return res
  }
  
  
  
  const closeWolf = ["sheep", "sheep", "wolf"]
  const dangerSheep = ["sheep", "sheep", "sheep", "wolf", "sheep"]
  
  console.log(warnTheSheep(dangerSheep))