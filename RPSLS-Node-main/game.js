"use strict";
const prompt = require("prompt-sync")();
const Human = require("./human");
const Ai = require("./ai");

class Game {
    constructor(){
        this.player01 = new Human();
        this.player02;
        this.turn;
    }
    
    runGame(){
        this.welcome()
        this.displayRules()
        this.gameStartUp()
        this.createRound()
        this.decideWinner()
    }

    welcome(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
    }

    displayRules(){
        console.log("RULES:");
        console.log("Rule#1: Game is set to best of three\nRule#2: There are no points for ties");
        console.log("HOW TO WIN:");
        console.log("Scissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors");
        console.log("Scissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock\nRock crushes Scissors");
    }
    
    gameStartUp(){
        this.player01.defineName();

        let userInput = parseInt(prompt("Who would you like to play against? Type 1 for Computer, Type 2 for Human: "));

        switch(userInput){
            case 1:
                this.player02 = new Ai();
                break;
            case 2:
                this.player02 = new Human();
                this.player02.defineName();
                break;
            default:
                console.log("Invalid input! Try again!");
                this.gameStartUp();
                break; 
        }
    }

    createRound(){
        while (this.player01.score < 2 && this.player02.score < 2) {
            this.player01.chooseGesture();
            this.player02.chooseGesture();
            this.compareGestures(this.player01.choice, this.player02.choice);
        }
        this.decideWinner();
    }

    decideWinner(){
        if (this.player01.score == 2){
            console.log(`${this.player01.name} wins the game!`);
        }else{
            console.log(`${this.player02.name} wins the game!`);
        }
        this.playAgain();
    }

    playAgain(){
        let userInput = prompt("Play Again? y/n ").toLowerCase();
        switch(userInput){
            case "y":
                this.player01 = new Human();
                this.player02 = null;
                this.runGame();
                break;
            case "n":
                console.log("Goodbye");
                break;
            default:
                console.log("Invalid input! Try again!")
                break;
        }
    }
  
    compareGestures(gesture01, gesture02){
        switch(gesture01){
            case "rock":
                if(gesture02 == "scissors" || gesture02 == "lizard"){
                    this.player1Wins();
                    this.createRound();
                }else if(gesture02 == "paper" || gesture02 == "spock"){
                    this. player2Wins();
                    this.createRound();
                }else{
                    console.log("It's a tie!");
                    this.createRound();
                }
                break;
            case "paper":
                if(gesture02 == "rock" || gesture02 == "spock"){
                    this.player1Wins();
                    this.createRound();
                }else if(gesture02 == "scissors" || gesture02 == "lizard"){
                    this. player2Wins();
                    this.createRound();
                }else{
                    console.log("It's a tie!");
                    this.createRound();
                }
                break;
            case "scissors":
                if(gesture02 == "paper" || gesture02 == "lizard"){
                    this.player1Wins();
                    this.createRound();
                }else if(gesture02 == "rock" || gesture02 == "spock"){
                    this. player2Wins();
                    this.createRound();
                }else{
                    console.log("It's a tie!");
                    this.createRound();
                }
                break;
            case "lizard":
                if(gesture02 == "spock" || gesture02 == "paper"){
                    this.player1Wins();
                    this.createRound();
                }else if(gesture02 == "rock" || gesture02 == "scissors"){
                    this. player2Wins();
                    this.createRound();
                }else{
                    console.log("It's a tie!");
                    this.createRound();
                }
                break;
            case "spock":
                if(gesture02 == "rock" || gesture02 == "scissors"){
                    this.player1Wins();
                    this.createRound();
                }else if(gesture02 == "lizard" || gesture02 == "paper"){
                    this. player2Wins();
                    this.createRound();
                }else{
                    console.log("It's a tie!");
                    this.createRound();
                }
                break;
        }
    }

    player1Wins(){
        console.log(`${this.player01.name} wins this round!`)
        this.player01.score++
    }

    player2Wins(){
        console.log(`${this.player02.name} wins this round!`)
        this.player02.score++
    }
    

}


module.exports = Game;