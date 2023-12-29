let gameSeq=[];
let userSeq=[];
let btns=["yellow","green","blue","red"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let button=document.querySelector("button");
let highestScore = 0; // Step 1: Initialize the highest score variable

function updateHighestScore(currentScore) {
  if (currentScore > highestScore) {
    highestScore = currentScore;
  }
}

document.body.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
       
        console.log("started");
        
    }
    
});
button.addEventListener("click",function(){
    if(started==false){
        started=true;
        levelUp();
       
        console.log("started");
        
    }
    
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*btns.length);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnFlash(randomBtn);
    
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
       
    }
    else{
        h2.innerHTML=`game over .<b>Your score was ${level}<b> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);

        reset();
       
    }

}
function buttonPress(){
    let btn=this;
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    btnFlash(btn);
}
let allBtns=document.querySelectorAll(".btn-container");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}


