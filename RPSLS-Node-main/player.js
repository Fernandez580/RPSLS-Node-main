"use strict";
const prompt = require("prompt-sync")();

class Player {
    constructor(){
        this.name = " ";
        this.score = 0;
        this.choice = " ";
        this.gestureList = ["rock","paper","scissors","lizard","spock"]
    }

    chooseGesture(){
        console.log("Choose your gesture:");
        for (let i = 0; i < this.gestureList.length; i++) {
            console.log(`Enter ${i} for ${this.gestureList[i]}`);
        }
        this.choice = this.gestureList[parseInt(prompt())]
        if (this.gestureList.includes(this.choice)) {
            console.log(`${this.name} selected ${this.choice}`);
        }else{
            console.log("Please enter a valid selection!");
            this.chooseGesture();
        }
    }

    defineName(){
        this.name = prompt("Enter your name. ")
        console.log(`Your name is ${this.name[0].toUpperCase() + this.name.substring(1)}. `)
    }
}

module.exports = Player;
