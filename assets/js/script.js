function game() {
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
};

const yourScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');



rock.addEventListener('click', () => input('rock'));
paper.addEventListener('click', () => input('paper'));
scissors.addEventListener('click', () => input('scissors'));
lizard.addEventListener('click', () => input('lizard'));
spock.addEventListener('click', () => input('spock'));



function computerChoise() {
    const compInput = ["rock", "paper", "scissors", "lizard", "spock"];
    const compChoise = compInput[[Math.floor(Math.random() * 5)]];
    return compChoise;
}

function convertToEmoji(word) {
    if (word === "rock") return "Rock ✊";
    if (word === "paper") return "Paper ✋";
    if (word === "scissors") return "Scissors ✌";
    if (word === "lizard") return "Lizard 🤏";
    return "Spock 🖖";
}

function win(compChoise, yourChoise) {
    yourScore++;
    result.innerText = `You win`;
    yourScore_span.innerHTML = yourScore;
    document.getElementById("choise").innerHTML = convertToEmoji(yourChoise)+" beats "+convertToEmoji(compChoise);
}

function lose(compChoise, yourChoise) {
    compScore++;
    result.innerText = `You lose`;
    compScore_span.innerHTML = compScore;
    document.getElementById("choise").innerHTML = convertToEmoji(yourChoise)+" loses to "+convertToEmoji(compChoise);

}

function draw (compChoise, yourChoise) {
    console.log("You draw");
    result.innerText = `You draw`;
    document.getElementById("choise").innerHTML = convertToEmoji(yourChoise)+" equals "+convertToEmoji(compChoise);
}

function input(yourChoise) {
    const compChoise = computerChoise();
    switch(gameRules[compChoise][yourChoise]) {
        case 'win':
            win(compChoise, yourChoise);
            break;
        case 'lose':
            lose(compChoise, yourChoise);
            break;
        case 'draw':
            draw(compChoise, yourChoise);
            break;   
    }
    checkWiner()
}

 
function checkWiner() {
    if (yourScore === 10 || compScore === 10) {
        gameOver();
    }
    return false;
}

function gameOver() {
    console.log("Sranje");
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');
    
    if(yourScore > compScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else{
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })
}
}
game()
