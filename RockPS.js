let userscore = 0;
let compscore = 0;
let user;
let choices = document.querySelectorAll(".box");

choices.forEach((c) => {
    c.addEventListener("click", () => {
        let userChoice = c.getAttribute("id");
        playGame(userChoice);
    })
});
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("User choice - ", userChoice);
    console.log("Computer choice -", compChoice);
    let mess = document.querySelector("#mess");
    if (userChoice == compChoice) {
        console.log("Draw game");
        mess.innerText = "Game was Draw! Play again";
        mess.style.backgroundColor = "#081b31";
    }
    else {
        let win = decWinner(userChoice, compChoice);
        if (win == true) {
            mess.innerText = `You win! Your ${userChoice} wins ${compChoice}`;
            let user = document.querySelector(".user-score");
            let userPoints = parseInt(user.innerText);
            user.innerText = userPoints + 1;
            mess.style.backgroundColor = "green";
        }
        else {
            mess.innerText = `You lose! Your ${userChoice} loses ${compChoice}`;
            let comp = document.querySelector(".comp-score");
            let compPoints = parseInt(comp.innerText);
            comp.innerText = compPoints + 1;
            mess.style.backgroundColor = "red";
        }
    }
}

const decWinner = (userChoice, compChoice) => {
    let win = true;
    if (userChoice == "rock") {
        if (compChoice == "paper") {
            win = false;
        }
        else {
            win = true;
        }
    }
    else if (userChoice == "paper") {
        if (compChoice == "rock") {
            win = true;
        }
        else {
            win = false;
        }
    }
    else {
        if (compChoice == "rock") {
            win = false;
        }
        else {
            win = true;
        }
    }
    return win;
}
const genCompChoice = () => {
    let choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    let compChoice = choice[index];
    return compChoice;
}