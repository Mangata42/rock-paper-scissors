let round = 0;
let result = 0;
let playerScore = 0;
let computerScore = 0;
let choiceImg;
let resetButton;
let fightResultsUI = document.querySelector("#fight-results");

function computerChoice()
{
    let arrChoices = ["rock", "paper", "scissors"];
    return (arrChoices[Math.floor(Math.random() * 3)]); //random number between 0 and 2
}

function playRound(player, computer)
{
    if (player == "rock" && computer == "scissors")
        return ("win");
    else if (player == "paper" && computer == "rock")
        return ("win");
    else if (player == "scissors" && computer == "paper")
        return ("win");
    else if (player === computer)
        return ("tie");
    else
        return ("lose");   
}

function game(event)
{
    let player_choice = "";
    let computer_choice = "";

    console.log(`Player choosed : ${this.alt}`);
    player_choice = this.alt;
    computer_choice = computerChoice();
    result = playRound(player_choice, computer_choice);
    switch (result)
    {
        case "win":
            console.log(`Player wins : ${player_choice} beats ${computer_choice}`)
            fightResultsUI.textContent = `Player wins : ${player_choice} beats ${computer_choice}`;
            playerScore++;
            break;
        case "lose":
            console.log(`Player loses : ${computer_choice} beats ${player_choice}`)
            fightResultsUI.textContent = `Player loses : ${computer_choice} beats ${player_choice}`;
            computerScore++;
            break;
        default:
            console.log("Tie!");
            fightResultsUI.textContent = "TIE!";
    }

    round++; 
    console.log(`Player : ${playerScore} : CPU : ${computerScore}`);

    document.querySelector(".player-score").lastElementChild.textContent =  playerScore;
    document.querySelector(".computer-score").lastElementChild.textContent = computerScore;
    document.querySelector(".rounds").lastElementChild.textContent = round;

    if (round == 5)
    {
        choiceImg.forEach( (e) => e.removeEventListener("click", game));
        console.log("event listener removed.")
        if (computerScore > playerScore) { fightResultsUI.textContent = "CPU WINS"; }
        if (computerScore < playerScore) { fightResultsUI.textContent = "PLAYER WINS"; }
        if (computerScore == playerScore) { fightResultsUI.textContent = "MATCH IS TIE";}
    }
}


choiceImg = document.querySelectorAll("img");
choiceImg.forEach( (e) => e.addEventListener("click", game));