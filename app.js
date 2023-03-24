/*
SoC - wk2 - HACKATHON - API APPS

Quiz Generator

Layout Ideas

Section 0 - Welcome and instructions
Section 1 - Player Profile
Section 2 - Quiz Generator
Section 3 - Game Area 
Section 4 - Score Board

*** Task 0 - Welcome and instructions

- Display a welcome message ✅
- Display instructions on how to play the game ✅
- Have instructions on a toggle button that shows or hides the instructions ✅

*** Task 1 - Player Profile

- Prompt the user for their name ✅
- Store the name in a variable ✅
- Display the name in the player profile section (h1) ✅


*** Task 2 - Quiz Generator

Some limitations to be placed on available options

- choose from 5 categories - gen knowledge (9), music (12), film (11), science (17), celebs (26) ✅
- choose from 3 difficulty levels (only if time allows) ✅
- button to generate quiz


display dropdown menu with options for categories
create a function that requests the api using string interpolation based on user selections
retrieve the data from the api and store in a variable

*** Task 3 - Game Area

- Ask each question one at a time and wait for the user to answer
- When an answer is received, check if it is correct and store the result
- Ask next question

*** Task 4 - Scoring

- When all questions have been asked, display the results as the number of correct answers out of the total number of questions

*** task 5 - Ask player if they want to play again

- If yes, reset the game
- If no, display a goodbye message

*/


// Section 0 - welcome and instructions
// Display a welcome message
function welcomeAlert() {
  let welcome = alert('Welcome to the Quiz Generator');
  return welcome;
}
welcomeAlert();
// Instructions button
let instructionsButton = document.getElementById('#instructions');
// Display instructions on how to play the game
function instructions() {
  let instructions = window.alert('Instructions: \n 1. Choose a category \n 2. Choose a difficulty level \n 3. Choose the number of questions \n 4. Click the Generate Quiz button \n 5. Answer the questions \n 6. Click the Submit button \n 7. See your score');
  //console.log(instructions)
  return instructions;
}

// Task 1 - Player Profile

let playerName = prompt('Please enter your name');

document.getElementById('playerName').textContent = playerName;



// Task 2 - Quiz Generator

//const categoryChoice = document.getElementById('category-select');
//const categorySelection = categoryChoice.value;

// create a function to save the players quiz choices and stores them as variables

let category = document.getElementById('category-select').value;
let difficulty = document.getElementById('difficulty-select').value;

function getQuizOptions() {
  const category = document.querySelector("#category-select").value;
  const difficulty = document.querySelector("#difficulty-select").value;

  const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)// Do something with the API response data, like display the quiz questions
    })
    .catch(error => {
      console.error("Error fetching quiz questions:", error);
    });

  //console.log("Selected Category:", category);
  //console.log("Selected Difficulty:", difficulty);

}

//console.log(getQuizOptions());

const generateQuizButton = document.getElementById('generate-quiz');

async function getQuote() {

  let category = 12;

  const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=boolean`);
  const data = await response.json();

  
  let question = data.results[0].question;
  //console.log(question);
  // return data.results[0].question;
}

