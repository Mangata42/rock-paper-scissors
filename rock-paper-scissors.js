function playerChoice()
{
    let player = prompt("Choose between Rock, Paper or Scissors : ");
    while (player == null  || player.length <= 0 
        || (player.toLowerCase() != "rock" && player.toLowerCase() != "paper" && player.toLowerCase() != "scissors"))
        player = prompt("Answer empty or incorrect, enter again (rock, paper, scissors) : ");

    return (player.toLowerCase());
}

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

function game()
{
    let round = 0;
    let result = 0;
    let playerScore = 0;
    let computerScore = 0;
    let player_choice = "";
    let computer_choice = "";

    while (round < 5)
    {
        player_choice = playerChoice();
        computer_choice = computerChoice();
        result = playRound(player_choice, computer_choice);
        switch (result)
        {
            case "win":
                console.log(`Player wins : ${player_choice} beats ${computer_choice}`)
                playerScore++;
                break;
            case "lose":
                console.log(`Player loses : ${computer_choice} beats ${player_choice}`)
                computerScore++;
                break;
            default:
                console.log("Tie!")
        }
        console.log(`Player : ${playerScore} : CPU : ${computerScore}`);
        round++;
    }

    if (computerScore > playerScore) { console.log("CPU WINS") };
    if (computerScore < playerScore) { console.log("PLAYER WINS") };
    if (computerScore == playerScore) { console.log("TIE")} ;
}

game();