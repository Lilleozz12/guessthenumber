let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let iaresult = document.getElementById("textiasnumber");
let playeresult = document.getElementById("textyournumber");
let totalresult = document.getElementById("result");
let statstimesclicked = document.getElementById("statstimenumber");
let statsnumbersguessed = document.getElementById("statsnumbersguessed");
let btngoback = document.getElementById("gobackButton");
let btnreset = document.getElementById("reset")
let playervalue = 0;
let varstatstimesclicked = 0;
let varstatsnumbersguessed = 0

function button1Click(){
playervalue = 1;
varstatstimesclicked +=1;
}

function button2Click(){
playervalue = 2;
varstatstimesclicked +=1;
}

function button3Click(){
playervalue = 3;
varstatstimesclicked +=1;
}

function button4Click(){
playervalue = 4;
varstatstimesclicked +=1;
}

function button5Click(){
playervalue = 5;
varstatstimesclicked +=1;
}
                            
function getRandomNumber(){
   let randNum = Math.floor(Math.random() * 5) + 1;
  
   iaresult.innerHTML = "AI´s number : " + randNum;
   playeresult.innerHTML = "Your number: " + playervalue;
   
   if(randNum === playervalue){
   totalresult.innerHTML = "You guessed the number! :D"
   varstatsnumbersguessed += 1;
   statsnumbersguessed.innerHTML = "Numbers that you guessed: " + varstatsnumbersguessed;
   }else{
      totalresult.innerHTML = "You didn´t guess :("
      }
}

function stadistics(){
 statstimesclicked.innerHTML = "Times that you clicked a number: " + varstatstimesclicked;
}

function gotoback(){
   window.location = "index.html"; 
}


   function resetstats(){
      varstatstimesclicked == 0;
      varstatsnumbersguessed == 0;
      console.log("reset");
      }



button1.addEventListener('click',()=>{
button1Click();
getRandomNumber();
stadistics();
 });

 button2.addEventListener('click',()=>{
    button2Click();
    getRandomNumber();
    stadistics();
     });

     button3.addEventListener('click',()=>{
        button3Click();
        getRandomNumber();
        stadistics();
         });

         button4.addEventListener('click',()=>{
            button4Click();
            getRandomNumber();
            stadistics();
             });

             button5.addEventListener('click',()=>{
                button5Click();
                getRandomNumber();
                stadistics();
                 });

                 btngoback.addEventListener('click',()=>{
                  gotoback();
                       });

                       btnreset.addEventListener('click',()=>{
                        resetstats();
                             });