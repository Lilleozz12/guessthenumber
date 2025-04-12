let btnstart = document.getElementById("startButton");
let btnexit = document.getElementById("exButton");

function gotogameplay(){
 window.location = "gameplay.html"; 
}

function gotoexit(){
     window.location = "https://www.google.com.mx/?hl=es-419"; 
    }
    
btnstart.addEventListener('click',()=>{
gotogameplay();
     });

     btnexit.addEventListener('click',()=>{
          gotoexit();
               });

               