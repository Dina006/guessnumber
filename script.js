console.log("hello");
let rendomValue= Math.trunc(Math.random()*20)+1;
console.log(rendomValue);
let guess=document.getElementById("guess");
let display=rendomValue;
let check=document.getElementById("check");
let again=document.querySelector(".again");
let content=document.querySelector(".startgu");
console.log(display);
console.log(content.textContent);
let highScore=0;
let score=20;
again.addEventListener('click',()=>{
    score=20;
    let rendomValue= Math.trunc(Math.random()*20)+1;
    document.querySelector(".score").textContent=20;
    document.querySelector(".startgu").textContent="Start Guessing ...";
    document.getElementById("display").innerHTML="?";
    display=rendomValue;
    document.querySelector("body").style.backgroundColor="black"; 
    console.log(display); 
});
check.addEventListener('click',()=>{
    if(display==guess.value){
        document.querySelector("body").style.backgroundColor="green";  
        document.querySelector(".startgu").textContent="Correct Guessing";
        document.getElementById("display").innerHTML=display;
        if(score>=highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    else if(display<guess.value){
        document.querySelector(".startgu").textContent="Too High";
        if(0<score){
            score--;
            document.querySelector(".score").textContent=score;
        }
    }
    else if(display>guess.value){
        document.querySelector(".startgu").textContent="Too Low";
        if(0<score){
            score--;
            document.querySelector(".score").textContent=score;

        }
        if(score==1){
            alert("Last Guessing");
        }    
    }
    else{
        console.log("false");
    }
    last();
});
function last(){
    if(score==0){
        document.querySelector(".startgu").textContent="Again";
    } 
}
console.log(score);