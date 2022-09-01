const choises = document.querySelectorAll(".choises");
let yourScore = 0;
let compScore = 0;

choises.forEach((choise) => {
    choise.addEventListener("click", function () {
        const yourInput = this.textContent;

        const compChoises = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const compInput = compOptions[Math.floor(Math.random() * 5)];

        compareInputs(yourInput, compInput);
        updateScore();
        if (checkWinner()) {
            yourScore = compScore = 0;
            updateScore();
        }
    });
});
