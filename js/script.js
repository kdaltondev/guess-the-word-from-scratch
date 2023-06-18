const guess = document.querySelector("#guess");
const submitGuessBtn = document.querySelector(".guess-button");
const displayPlaceholder = document.querySelector(".wordPlaceholder");
const lettersGuessedDisplay = document.querySelector(".letters-guessed");
const lettersGuessedArray = [];
const numberOfGuessesDisplay = document.querySelector(".number-of-guesses");
const reset = document.querySelector(".reset");
let numberOfGuesses = 8;
console.log(displayPlaceholder.innerText);
 

/*Prepare word for comparison*/
let word = "yes";
let wordUpper = word.toUpperCase();
let wordArray = wordUpper.split("");
console.log(wordArray);
console.log(wordArray.length);

/*Generate placeholder word*/
let placeholderWord = function (wordArray) {
  placeholderArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    placeholderArray.push("-");
  }
  let placeholder = placeholderArray.join(``);
  console.log(`This is placeholder ${placeholder}.`);
  displayPlaceholder.innerText = `${placeholder}`;
  return placeholder;
};

let displayPlaceholderWord = placeholderWord(wordArray);
/*console.log(displayPlaceholderWord);
displayPlaceholderWord = displayPlaceholderWord.join('');
console.log(displayPlaceholderWord);
displayPlaceholder.innertext=`This is the ${displayPlaceholderWord}`;*/

submitGuessBtn.addEventListener("click", function (placeholderWord) {
  letterGuess = guess.value;
  letterGuessUpper = letterGuess.toUpperCase();

  /*Check to see if it's a valid input*/
  if (letterGuess === "") {
    console.log("Please enter a letter");
    guess.value = "";
  } else if (letterGuess.length > 1) {
    console.log("Please enter only one letter");
    guess.value = "";
  } else if (!letterGuess.match(/[a-zA-Z]/)) {
    console.log("Please enter a letter");
    guess.value = "";
  } else if (lettersGuessedArray.includes(letterGuessUpper)) {
    console.log("You already guessed that letter");
    guess.value = "";
  } else {
    console.log("This is a valid letter");
    lettersGuessedArray.push(letterGuessUpper);
    let lettersGuessed = lettersGuessedArray.join("");
    lettersGuessedDisplay.innerHTML = `Letters you have guessed:<br> ${lettersGuessed}`;

    /*If it's a valid input check to see if it's in the word*/
    /*letterGuessUpper = letterGuess.toUpperCase();*/
    console.log(letterGuessUpper);
    /*Checks to see if word contains guessed letter*/
    if (wordArray.includes(letterGuessUpper)) {
      console.log("Word includes this letter");
      /*If word contains guessed letter loops around to find all instances */
      while (wordArray.includes(letterGuessUpper)) {
        let location = wordArray.indexOf(letterGuessUpper);
        placeholderArray[location] = letterGuessUpper;
        placeholder = placeholderArray.join("");
        displayPlaceholder.innerText = `${placeholder}`;
        wordArray[location] = "-";
      }
      /*After looping checks to see if all of the letters have been guessed*/
      if (!placeholderArray.includes("-")) {
        console.log("You win");
        submitGuessBtn.classList.add("hide");
        reset.classList.remove("hide");
      } /*If all of the letters have not been guessed, reset guess input*/ else {
        guess.value = "";
      }
    } else {
    /*If word does not contain the guessed letter*/
      console.log("Word does not include this letter");
      numberOfGuesses -= 1;
      numberOfGuessesDisplay.innerText = `${numberOfGuesses}`;
      if (numberOfGuesses < 1) {
        console.log("You have run out of guesses");
      }
      guess.value = "";
    }
  }
});
