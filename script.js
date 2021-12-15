const rock = document.querySelector(".rock");
const paper  = document.querySelector(".paper");
const scissors  = document.querySelector(".scissors");
let playerChoice;

function pickChoice()
{
    const clickedElement = EventTarget;
    var currentChoice;
    switch(clickedElement)
    {
        case rock:
            currentChoice = "rock";
            return "rock";
        break;

        case paper:
            currentChoice = "paper";
            return "paper";
        break;

        case scissors:
            currentChoice = "scissors";
            return "scissors";
        break;
    }
    console.log(clickedElement);
}