var statesList = ["Rhode Island", "Texas", "Idaho", "New Mexico", "Virginia", "Washington", "Vermont"];
var randomStates = [];
var score = 0;
var scoreboard = $(`h4`);
var mode = 3;

function setScore() {
  scoreboard.text("Score: " + score);
}

newGame();

function newGame() {
  
  setScore();
  
  while (randomStates.length < mode) {
    // add random states to new list
    var randomNum = Math.floor(Math.random() * statesList.length);
    randomStates.push(statesList[randomNum]);
  
    /// Remove any duplicates
    for (var i = 0; i < randomStates.length - 1; i++) {
      if (randomStates[i] === statesList[randomNum]) {
        randomStates.pop();
      }
    }
  }
  
  // add state maps to html
  var container = $(`.stateMaps`);
  
  function addStates(state) {
    container.append(`<img src="states/${state}.jpg" class="${state}"> </img>`);
  }
  randomStates.forEach(addStates);
  
  // 
  var randomNum2 = Math.floor(Math.random() * randomStates.length);
  var state = randomStates[randomNum2];
  
  var question = $('h3');
  question.text("Which state is " + state + "?");

  var img = $(`img`);
  img.on("click", click);
  
  function click() {
    if (event.target.className === state) {
      if (mode === 3) {
        score++;
      } else if (mode === 4) {
        score += 2;
      } else {
        score += 3;
      }
      restart();
    }
    else {
      alert("Nope! Try again.");
      score--;
      setScore();
    }
  }
  
}

var easyBtn = $(`.easy`);
var mediumBtn = $(`.medium`);
var hardBtn = $(`.hard`);

easyBtn.on("click", setEasy);
mediumBtn.on("click", setMedium);
hardBtn.on("click", setHard);

function setEasy() {
  if (mode !== 3) {
    mode = 3;
    restart();
  }
}
function setMedium() {
  if (mode !== 4) {
    mode = 4;
    restart();
  }
}
function setHard() {
  if (mode !== 5) {
    mode = 5;
    restart();
  }
}

function restart(){
  var img = $(`img`);
  img.remove();
  randomStates = [];
  newGame();
}