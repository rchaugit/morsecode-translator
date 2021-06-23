import * as key from './morseKey.js'


//english to morse code function
//english string to lowercase, split into array, map function to match and translate.
//array to lowercase
//function to split the string into an array.
//function to push character and word delimiter in the spaces
//match each item of an array with its matching key in the translation key.
//map each item in the array and turn the corresponding key?
//concatenate? reduce? the converted array back to a string
//return

export const engToMorse = (str, object) => { 
  console.log(`this log is targeting, the eng to morse ${str}`);//function that takes a string in english
  return str
    .toLowerCase() //turns the string to lowercase to match the morsecode key
    .split("") //splitting string into an array and seperate them with a space ["this", "is", "a", "string" ]
    .map((letter) => { return object[letter] }) //map each array letter to a letter in the object to return
    .join(" ");
  
;}


//morse to english code function

export const morseToEng = (str, object) => {
  // console.log(`this log is targetting, the morse to eng ${str}`);
  // return str
  // .split(" ")
  // .map((letter) => { return object[letter] })
  // .join("")

  return str
  .split('    ')
  .map(str =>
      str.split(' ').map( letter => object[letter]).join('')
  ).join(' ');
}



//character delimiter function of 1 spaces

//word delimiter function of 4spaces
