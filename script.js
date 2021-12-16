const rock = document.querySelector(".rock");
const paper  = document.querySelector(".paper");
const scissors  = document.querySelector(".scissors");
const choicesContainer = document.querySelector(".options-container");
const pickChoiceTitle = document.querySelector(".pick-choice-title");
let chosenDiv;
const choicesContainerStartingTopPosition = choicesContainer.style.top;
const pickChoiceTitleStartingPosition = pickChoiceTitle.style.top;
let startMatchTimer;

console.log(rock.attributes);
let playerChoice;
let cpuChoice;
const possibleChoices =["rock", "paper", "scissors"];

function pickChoice(id, className)
{
    const clickedElement = id.className;
    chosenDiv = id;
    // var currentChoice;
    switch(clickedElement)
    {
        case rock:          
            setPlayerChoice("rock");
        break;

        case paper:
            setPlayerChoice("paper");
        break;

        case scissors:
            setPlayerChoice("scissors");
        break;
    }
    chosenDiv.style.position = "absolute";
    chosenDiv.style.top = "var(--center-of-screen)";
    chosenDiv.style.backgroundColor = "#171131";
    chosenDiv.style.transform = "scale(2) rotateZ(360deg)";
    chosenDiv.style.outlineColor = "#50fff6";
    chosenDiv.style.zIndex = "20";
    chosenDiv.style.outlineWidth = "8px";
    rock.style.pointerEvents = "none";
    scissors.style.pointerEvents = "none";
    paper.style.pointerEvents = "none";
    rock.style.position = "absolute";
    scissors.style.position = "absolute";
    paper.style.position = "absolute";
    startMatchTimer = setTimeout(moveTheMainMenuItems , 1000);
}

function setPlayerChoice(newChoice)
{
    playerChoice = newChoice;
}

function setCpuChoice()
{
    const getCpuChoice = ()=> Math.floor(possibleChoices.length * Math.random());
    cpuChoice = possibleChoices[getCpuChoice];
}

function resetChoices()
{
    playerChoice = null;
    cpuChoice = null;
}

function matchDecidingConditions()
{
    if(playerChoice !== null && cpuChoice !== null)
    {
        switch(playerChoice)
        {
            case "rock":
                if(cpuChoice === "rock") return "draw";
                if(cpuChoice === "paper") return "lose";
                if(cpuChoice === "scissors") return "win";
            break;
            case "paper":
                if(cpuChoice === "rock") return "win";
                if(cpuChoice === "paper") return "draw";
                if(cpuChoice === "scissors") return "lose";
            break;
            case "scissors":
                if(cpuChoice === "rock") return "lose";
                if(cpuChoice === "paper") return "win";
                if(cpuChoice === "scissors") return "draw";
            break;           
        }
    }
}

function moveTheMainMenuItems()
{
    pickChoiceTitle.style.top = "-200px";
    choicesContainer.style.top = "2000px";
    setCpuChoice();
    startMatchTimer = setTimeout(restartGame, 1000);
}

function restartTheMainMenuItems()
{
    pickChoiceTitle.style.top = "200px";
    choicesContainer.style.top = "400px";

}

function restartGame()
{
    resetChoices();
    location.reload();
}