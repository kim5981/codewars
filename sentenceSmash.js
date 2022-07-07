/**
 * Write a function that takes an array of words 
 * and smashes them together into a sentence and returns the sentence
 * You can ignore any need to sanitize words or add punctuation
 * but you should add spaces between each word.
 * Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 * 
 * Ex:
 * 
 * ['hello', 'world', 'this', 'is', 'great'] =>  'hello world this is great'
 * 
 * **/

 const smash = a => a.join(" ")

 const test1 = ["hello", "world"]
const test2 = ["this", "is", "a", "really", "long", "sentence"]

console.log(smash(test2))