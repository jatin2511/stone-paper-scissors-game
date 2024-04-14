let userscore=0;
let pcscore=0;
const pcscoredisp=document.querySelector('#pcscore > h1');
    const userscoredisp=document.querySelector('#yourscore > h1');
    const options=document.getElementsByClassName('options');
    const result=document.getElementsByClassName('results');
    const useroption=document.querySelector('.userchoice img');
    const pcoption=document.querySelector('.pcchoice img');
    const winstatus=document.querySelector('.resultdisplay>h1');
    const againststatus=document.querySelector('.resultdisplay>h3');
    const ch1=document.getElementById('ch1');
    const ch2=document.getElementById('ch2');
function results(userchoice){
    //0 for stone
    //1 for scissors
    //2 for paper
    let pcchoice=Math.floor(Math.random(1,2,3)*3);
    let matchresult=0;
    // 0 for tie
    // 1 for user wins
    // 2 for pc wins
if(userchoice===0){
    useroption.src="../assets/stone.png";
    
    if(pcchoice==1){
      matchresult=1;
    }
    else if(pcchoice==2){
     matchresult=2;
    }
}
else if(userchoice===1){
    useroption.src="../assets/scissors.png";
    if(pcchoice==0){
       matchresult=2;
    }
    
    else if(pcchoice==2){
     matchresult=1;
    }
}
else{
    useroption.src="../assets/paper.png";
    if(pcchoice==0){
       matchresult=1;
    }
    else if(pcchoice==1){
      matchresult=2;
    }
    
}
if(pcchoice==0){
       pcoption.src="../assets/stone.png";
}
else if(pcchoice==1){
    pcoption.src="../assets/scissors.png";
}
else{
    pcoption.src="../assets/paper.png";
}
   changedisplay(userchoice,pcchoice,matchresult);
}
//////////////////////////////////
function changedisplay(userchoice,pcchoice,matchresult){ 
    options[0].style.display='none';
    result[0].style.display='flex';
    if(matchresult==1){
        winstatus.textContent='YOU WIN';
        userscore++;
        userscoredisp.textContent=userscore;
        ch1.style.background='green';
        againststatus.style.visibility='visible';
    }
    else if(matchresult==2){
        winstatus.textContent='YOU LOST'
        pcscore++;
        pcscoredisp.textContent=pcscore;
        ch2.style.background='green';
        againststatus.style.visibility='visible';
    }
    else{
        winstatus.textContent='TIE UP'
        againststatus.style.visibility='hidden';
    }
    

}
function playagain(){
    ch1.style.background='none';
    ch2.style.background='none';
    result[0].style.display='none';
    options[0].style.display='block';
   
}