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
- button to generate quiz ✅


display dropdown menu with options for categories ✅
create a function that requests the api using string interpolation based on user selections ✅
retrieve the data from the api and store in a variable ✅

*** Task 3 - Game Area

- Ask each question ✅ (one at a time and wait for the user to answer)
- When an answer is received, check if it is correct (and store the result) ✅
- ((Ask next question))

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
let instructionsButton = document.getElementById('instructions');

// Display instructions on how to play the game
function instructions() {
  let instructions = window.alert('Instructions: \n 1. Choose a category \n 2. Choose a difficulty level \n 3. Click the Generate Quiz button \n 5. Test your knowledge! \n 6. Refresh the page to play again');
  //console.log(instructions)
  return instructions;
}

// Task 1 - Player Profile

let playerName = prompt('Please enter your name');

document.getElementById('playerName').textContent = playerName;


// Task 2 - Quiz Generator

// create a function to save the players quiz choices and stores them as variables

let category = document.getElementById('category-select').value;
let difficulty = document.getElementById('difficulty-select').value;

// Create an empty array for questions
let quizQuestions = [];

// Takes in choices and returns the information from the API
function getQuizOptions() {
  const category = document.querySelector("#category-select").value;
  const difficulty = document.querySelector("#difficulty-select").value;

  const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=boolean`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const quizQuestions = data.results.map(result => {
        return {
          question: result.question,
          correctAnswer: result.correct_answer
        };
      });
      //console.log("Quiz questions:", quizQuestions[0].question);
      // call the function 
      displayQuizQuestions(quizQuestions);
    })
    
    .catch(error => {
      console.error("Error fetching quiz questions:", error);
    });
  // console.log(quizQuestions);
  // console.log("Selected Category:", category);
  // console.log("Selected Difficulty:", difficulty);
}
    
// Displays questions
function displayQuizQuestions(quizQuestions) {
  // Get a reference to the quiz container element
  const quizContainer = document.querySelector("#quiz-container");

  quizContainer.innerHTML = "";

  // Loop through each quiz question and create a new element to display it
  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.textContent = `${index + 1}. ${question.question}`;
    quizContainer.appendChild(questionElement);

    const trueButton = document.createElement("button");
    trueButton.textContent = "True";
    trueButton.style.marginLeft = "10px";
    questionElement.appendChild(trueButton);

    const falseButton = document.createElement("button");
    falseButton.textContent = "False";
    falseButton.style.marginLeft = "10px";
    questionElement.appendChild(falseButton);

    // Add event listeners to the buttons to check answers
    trueButton.addEventListener("click", () => {
      checkAnswer("True", question.correctAnswer);
  });

  falseButton.addEventListener("click", () => {
      checkAnswer("False", question.correctAnswer);
  });

  // Function to check the user's answer against the correct answer
  function checkAnswer(userAnswer, correctAnswer) {
      if (userAnswer === correctAnswer) {
          // User's answer is correct
          const correctAnswerElement = document.createElement("div");
          correctAnswerElement.textContent = "Correct!";
          correctAnswerElement.style.fontSize = "18px";
          questionElement.appendChild(correctAnswerElement);
         // console.log("Correct!");
      } else {
          // User's answer is incorrect
          const incorrectAnswerElement = document.createElement("div");
          incorrectAnswerElement.textContent = "Incorrect!";
          incorrectAnswerElement.style.fontSize = "18px";
          questionElement.appendChild(incorrectAnswerElement);
         // console.log("Incorrect!");
      }
  }
  });
}

// const generateQuizButton = document.getElementById('generate-quiz');

