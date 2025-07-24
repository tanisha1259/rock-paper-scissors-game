let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw, play again!";
    msg.style.background = "linear-gradient(180deg, #14222F, #122E47)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "linear-gradient(45deg, #0f3941ff, #2f5667, #0f3941ff)";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.background = "linear-gradient(45deg, #531e5aff, #734b6d, #531e5aff)"; 
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);

    const compChoice = generCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});