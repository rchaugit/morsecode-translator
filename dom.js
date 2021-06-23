import * as actions from './functions.js';
import { engToMorseKey, morseToEngKey } from './morseKey.js';

const { engToMorse,
morseToEng, } = actions;

const form = document.getElementById('morseform');
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// const input = document.getElementById('input').value;
const output = document.getElementById('outputdisplay');

//Eng -> Morse Button
const engToMorBtn = document.getElementById('engToMor');
engToMorBtn.addEventListener('click', (event) => {
  const input = document.getElementById('input').value;
  // console.log(`english to morse button is linked`);
  output.innerHTML = engToMorse(input, engToMorseKey);
})

//Morse to Eng Button
const morToEngBtn = document.getElementById('morToEng');
morToEngBtn.addEventListener('click', (event) => {
  const input = document.getElementById('input').value;
  // console.log('morse to english button is linked');
  output.innerHTML = morseToEng(input, morseToEngKey);
    //call for reverse translation
})
