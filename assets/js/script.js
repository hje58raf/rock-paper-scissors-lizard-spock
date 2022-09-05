let yourScore = 0;
let compScore = 0;
const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors',
    'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));
lizard.addEventListener('click', () => game('lizard'));
spock.addEventListener('click', () => game('spock'));

function game(yourChoise) {
    const compChoise = getcompInput();
    console.log(yourChoise)
    console.log(compChoise)
    
}

function getcompInput() {
    const compChoise = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = [Math.floor(Math.random() * 5)] ;
    return compChoise[randomNumber];
    };



function compareInputs(youInput, youInput) {
    if (youInput === youInput) {
        console.log("Tie")
        return;
    } else if (getUserWinsStatus(youInput + compInput)) {
        yourScore++;
        console.log("You win")
    } else {
        compScore++;
        console.log('You lose')
    }
}

function getUserWinsStatus(result) {
    return userWinResults.some(winStr => winStr === result);
}

