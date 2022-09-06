let yourScore = 0;
let compScore = 0;
let gameRules = {
    rock: {
        rock: 'draw',
        scissors: 'lose',
        paper: 'win',
        spock: 'win',
        lizard: 'lose'
    },
    paper: {
        paper: 'draw',
        rock: 'lose',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        scissors: 'draw',
        paper: 'lose',
        rock: 'win',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        scissors: 'win',
        paper: 'lose',
        rock: 'win',
        lizard: 'draw',
        spock: 'lose'
    },
    spock: {
        scissors: 'lose',
        paper: 'win',
        rock: 'lose',
        lizard: 'win',
        spock: 'draw'
    }
}

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
    const compInput = ["rock", "paper", "scissors", "lizard", "spock"];
    const compChoise = compInput[[Math.floor(Math.random() * 5)]] ;

    switch(gameRules[compChoise][yourChoise]) {
        case 'win':
            yourScore++;
            console.log("You Win")
            console.log(yourScore)
            break;
        case 'lose':
            compScore++;
            console.log("You lose")
            console.log(compScore)
            break;
        case 'draw':
            console.log("You draw")
            break;   
    }
}