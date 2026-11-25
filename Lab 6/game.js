
/* Variables for game scores and results */
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
let gameStarted = false;
let player = "";

/* Function to start the game */
function startGame() {

    // Read player name
    player = document.getElementById("playerName").value;

    // Check if name is empty
    if (player.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    // Start the game
    gameStarted = true;

    // Display welcome message
    document.getElementById("welcome").innerHTML =
        "Welcome, " + player + "!";

    // Display start date and time
    let date = new Date();

    document.getElementById("startTime").innerHTML =
        "Start date and time: " + date;

    // Display starting message
    document.getElementById("result").innerHTML =
        "Game started! Choose your move.";

    document.getElementById("result").style.color = "blue";
}

/* Function to generate computer choice */
function getComputerChoice() {

    // Array of choices
    let choices = ["rock", "paper", "scissors"];

    // Generate random number from 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Return random choice
    return choices[randomNumber];
}

/* Function to play one round */
function playRound(playerChoice) {

    // Check if game has started
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Variable to store round result
    let roundResult = "";

    // Determine the winner
    if (playerChoice === computerChoice) {

        // Draw
        roundResult = "Draw";
        draws++;

        document.getElementById("result").style.color = "grey";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        // Player wins
        roundResult = "Win";
        wins++;

        document.getElementById("result").style.color = "green";
    }
    else {

        // Player loses
        roundResult = "Lose";
        losses++;

        document.getElementById("result").style.color = "red";
    }

    // Change player image
    document.getElementById("playerImage").src =
        playerChoice + ".png";

    // Change computer image
    document.getElementById("computerImage").src =
        computerChoice + ".png";

    // Display player choice
    document.getElementById("playerChoiceLabel").innerHTML =
        playerChoice.toUpperCase();

    // Display computer choice
    document.getElementById("computerChoiceLabel").innerHTML =
        computerChoice.toUpperCase();

    // Display result message
    document.getElementById("result").innerHTML =
        "You chose " + playerChoice +
        " and the computer chose " + computerChoice +
        ". You " + roundResult + "!";

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result in array
    results.push(roundResult);

    // Get round number
    let roundNumber = results.length;

    // Add new row to history table
    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + roundNumber + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + roundResult + "</td>" +
        "</tr>";
}

/* Function to show game summary */
function showSummary() {

    // Variable to count wins
    let totalWins = 0;

    // Count wins using for loop
    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }
    }

    // Calculate total rounds
    let totalRounds = results.length;

    // Calculate win percentage
    let winPercentage = 0;

    if (totalRounds > 0) {
        winPercentage = Math.round(
            (totalWins / totalRounds) * 100
        );
    }

    // Display game summary
    alert(
        "Game Summary for " + player + "\n" +
        "You played " + totalRounds +
        " rounds and won " + winPercentage + "%"
    );
}

/* Function to reset the game */
function resetGame() {

    // Reset scores
    wins = 0;
    losses = 0;
    draws = 0;

    // Empty results array
    results = [];

    // Stop the game
    gameStarted = false;

    // Reset scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear history table and keep header
    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    // Clear result message
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.color = "grey";

    // Clear welcome message
    document.getElementById("welcome").innerHTML = "";

    // Clear start date and time
    document.getElementById("startTime").innerHTML = "";

    // Clear player name input
    document.getElementById("playerName").value = "";

    // Reset player image
    document.getElementById("playerImage").src = "rock.png";

    // Reset computer image
    document.getElementById("computerImage").src = "rock.png";

    // Reset choice labels
    document.getElementById("playerChoiceLabel").innerHTML = "ROCK";
    document.getElementById("computerChoiceLabel").innerHTML = "ROCK";

    // Reset player name
    player = "";
}
