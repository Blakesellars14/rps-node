const readline = require("readline");

class Prompt {
    constructor(message){
        // @TODO- validate prompt is a string
        this.message = message;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.promptUser = function(){
            return new Promise ((res,rej)=>{
                this.rl.question(`${this.message}\n`,userInput=>{
                    this.rl.close();
                    res(userInput);
                });
            })

        }
    }
}

exports.Prompt = Prompt;
