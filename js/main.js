
class GameManager {
    #maleIMG = document.querySelector("#maleIMG"); 
    #famaleIMG = document.querySelector("#famaleIMG");

    #genderIMG = document.querySelector(".gender-img-switchers"); 
    

    #maleSwicher;
    #famaleSwicher;
    constructor(maleSwicher, famaleSwicher){
        this.#maleSwicher = maleSwicher;
        this.#famaleSwicher = famaleSwicher;
    }
    switchMale(){

         // ця частина кода вбирає жінку

            this.#famaleIMG.style.transform = "scale(-1, 1)";
            setTimeout(()=>{this.#genderIMG.style.transition = "1s"
            this.#genderIMG.style.left= "-100%";},1200)
            
            setTimeout(()=>{ this.#famaleIMG.classList.remove("active");
            this.#famaleSwicher.classList.remove("active");},2300);
  
         // ця частина кода вертає чоловіка


            setTimeout(()=>{this.#maleIMG.classList.add("active");
            this.#maleSwicher.classList.add("active");},2400);
            
            setTimeout(()=>{this.#maleIMG.style.transform = "scale(-1, 1)"},2400);

            setTimeout(()=>{ this.#maleIMG.style.transform = "scale(1, 1)";},2600);

            setTimeout(()=>{ this.#genderIMG.style.transition = "2s"
            this.#genderIMG.style.left= "-43%";},3000)

            

            // this.#famaleIMG.classList.remove("active");
            // this.#famaleSwicher.classList.remove("active");

            // this.#maleIMG.classList.add("active");
            // this.#maleSwicher.classList.add("active");
            
        
    }
    switchFamale(){

            // ця частина кода вбирає чоловіка

            this.#maleIMG.style.transform = "scale(-1, 1)";
            
            setTimeout(()=>{this.#genderIMG.style.transition = "1s"
            this.#genderIMG.style.left= "-100%";},1200)
            
            setTimeout(()=>{ this.#maleIMG.classList.remove("active");
            this.#maleSwicher.classList.remove("active");},2300);
            
            // ця частина кода вертає дівчину

            setTimeout(()=>{this.#famaleIMG.classList.add("active");
            this.#famaleSwicher.classList.add("active");},2400);

            setTimeout(()=>{this.#famaleIMG.style.transform = "scale(1, 1)";},2600);

            setTimeout(()=>{ this.#genderIMG.style.transition = "2s"
            this.#genderIMG.style.left= "-43%";},3000)
 
    }
}
import { winAnimation } from "./win.js";
class Robot{
    #robot;
    #robotOutput = document.querySelector("#robotOutput");
    #robotOutputImg = document.querySelector(".saying");
    #rezultAttempstOutput = document.querySelector("#NumberOfTry");
    #bestScoreOutput = document.querySelector("#BestScore");
    #numberToRiddle;
    #isGameStarted;
    #attemptsCounter;
    constructor()
    {
        this.#robot = document.querySelector("#robot");
        this.#isGameStarted = false;
    }

    start()
    {   
        // this.#robotOutputImg.style.width = "400px";
        // this.say("I guess the number from 0 to 100.");
        // this.say("I guessed a number from 0 to 100. Try to riddle");
        this.#getNumberToRiddle();
       
        if(this.#numberToRiddle>=0 && this.#numberToRiddle<=100){
            this.say("I guessed a number from 0 to 100. Try to riddle");
            this.#isGameStarted = true;
            // console.log(this.#numberToRiddle);
            let rezults = document.querySelector(".rezults");
            
            rezults.style.transition = "0s";
            rezults.style.display = "none";}
    }

    
    displayPrompts(inputValue)
    {
        if(this.#isGameStarted == true)
        {
            if(inputValue > this.#numberToRiddle)
            {
                this.say(`I guessed a smaller number than ${inputValue}) Try again:)`);
                this.#attemptsCounter++;
            }else if(inputValue < this.#numberToRiddle)
            {
                this.say(`I guessed a bigger number than ${inputValue})) Try again:)`)
                this.#attemptsCounter++;
            }else if(inputValue == this.#numberToRiddle)
            {
                this.#winning();
                console.log(this.#attemptsCounter);
            }else
            {
                this.say(`Sorry I don't understand you :( Try again please`)
            }
        }else
        {
            this.say(`Press "Start" to begine:)`)
        }
    }
    #winning()
    {
        this.say(`I congratulate you! You win! Number wich i readdle was ${this.#numberToRiddle} !!!!!!`);
        let rezultAttempst = document.querySelector("#NumberOfTry");
        this.#rezultAttempstOutput.textContent = this.#attemptsCounter;

        if(!window.localStorage.getItem("bestScore")){
            window.localStorage.setItem("bestScore", this.#attemptsCounter);
        }else if (window.localStorage.getItem("bestScore") || window.localStorage.getItem("bestScore") > this.#attemptsCounter){
            window.localStorage.setItem("bestScore", this.#attemptsCounter);
        };

        if (window.localStorage.getItem("bestScore")){
            this.#bestScoreOutput.textContent =  window.localStorage.getItem("bestScore");
        }
        
        winAnimation();

        this.showRezults();
        this.showAnim(2);
        setTimeout(() => {this.showAnim(3)});
    }
    
    showRezults()
    {

        let rezults = document.querySelector(".rezults");
        rezults.style.display = "flex";
        rezults.style.opacity = "0"

        setTimeout(() => 
        {rezults.style.opacity = "1";
        rezults.style.transition = "2s";
    },1000)    }

    #getNumberToRiddle()
    {
    
       this.#numberToRiddle = Math.floor(Math.random() * 101);
       console.log(this.#numberToRiddle);
       return this.#numberToRiddle;
    }

    #calculateSayingArea(text)
    {
       let sayingArea = document.querySelector("#sayingArea");

       if (text.length > 40)
       {
        sayingArea.style.width = "350px";
        this.#robotOutput.style.right = "30%";
        this.#robotOutput.style.bottom = "45%";
       }
       else if(text.length < 5)
       {
        sayingArea.style.wihth = "300px";
        this.#robotOutput.style.right = "-10%";
        this.#robotOutput.style.bottom = "57%";
       }
       else{
        sayingArea.style.wihth = "300px";
        this.#robotOutput.style.right = "1%";
        this.#robotOutput.style.bottom = "57%";
       };
    }

    showAnim(value)
    {
        switch (value){
            case 1:
                this.#robot.classList.add("inputing");
                setTimeout(() => {this.#robot.classList.remove("inputing");},3000);
                break
            case 2:
                this.#robot.classList.add("rezult");
                setTimeout(() => {this.#robot.classList.remove("rezult");},3000);
                break
        }
       
       
    }
    say(text)
    {
        this.#calculateSayingArea(text);
        this.#robotOutputImg.style.opacity = 1;
        this.#robotOutput.textContent = text;

       // якщо нічього не написано
        if(robotOutput.textContent.length<=0)
        {
            this.#robotOutputImg.style.opacity = 0;
        }
    }


};

let robot = new Robot();
let startBtn = document.querySelector("#startBtn");

let input = document.forms[0].elements.input;
document.querySelector("#btn-input").addEventListener("click",inputFunction);
document.addEventListener("keydown", (element) => {if (element.key == "Enter") {inputFunction()} else return});

function inputFunction (){
    event.preventDefault();
    console.log(input.value);
    robot. showAnim(1);
    robot.displayPrompts(input.value);
    input.value = "";
}
console.log(input);
// анимация визова при победе
// winAnimation();

startBtn.addEventListener("click", () => {robot.start()})


// переключения чоловік жінка


let maleSwicher = document.querySelector(".gender-switcher-male");
let famaleSwicher = document.querySelector(".gender-switcher-famale"); 
console.log(maleSwicher);
console.log(famaleSwicher);

let gameManager = new GameManager(maleSwicher, famaleSwicher);

maleSwicher.addEventListener("click", ()=>{gameManager.switchMale()});
famaleSwicher.addEventListener("click", ()=>{gameManager.switchFamale()});