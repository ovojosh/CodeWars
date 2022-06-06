function duplicateEncode(word){
    //lowercase the word
    word = word.toLowerCase();
    //Make a new variable for the string to be placed
    let newString = ''
    //split the word up and then count the letters in the string  
    word = word.split('').forEach(x => {
        //if letter appears only once then add a "("
        if (word.indexOf(x) === word.lastIndexOf(x)) {
            newString += '('
        } else {
            //if letter appears more than once then add a ")"
            newString += ')'
        }
    })
    //return the new string
    return newString
}
console.log(duplicateEncode("Success"))