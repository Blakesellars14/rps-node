'use strict';
const Prompt = require('./modules/prompt').Prompt;
const t = ["Rock","Paper","Scissors"];
let userChoiceIndex;

let prompt = new Prompt("Rock, Paper, or Scissors?");
prompt.promptUser()
.then(data=>{
    userChoiceIndex = getIndexOfChoice(data);
    validateUserChoice ? completeTurn(userChoiceIndex) : reprompt();
})
.catch(err=>{
    console.error(err);
})

function validateUserChoice(n){
    if(n === 0 | n===1 | n===2) return true;
    return false;
}

function getIndexOfChoice(choice){
    for(let i=0; i<t.length; i++){
        if(t[i].toUpperCase()===choice.toUpperCase()) return i;
    }
    return -1;
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 0;
}

function completeTurn(userChoiceIndex){
    let computerChoiceIndex = getComputerChoice();
    console.log(`Computer choice: ${t[computerChoiceIndex]}`);
    let winstate = determineWinState({
        "userChoiceIndex": userChoiceIndex,
        "computerChoiceIndex": computerChoiceIndex
    });
    console.log(getFinalMessage(winstate));
}

function determineWinState(choices){
    let c = choices.computerChoiceIndex;
    let u = choices.userChoiceIndex;
    return 0;
    // @TODO Blake- add win \ lose logic

    //if(player wins) return 1

    //if(tie) return 0

    // if (player loses) return -1
}

function getFinalMessage(winstate){
    switch(winstate) {
        case -1: 
            return "You lose.";
        case 0:
            return "It's a tie!";
        case 1:
            return "You win";

    }
}