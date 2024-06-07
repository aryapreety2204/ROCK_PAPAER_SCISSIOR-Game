let userScore=0;
let compScore=0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["Rock","paper","scissor"];
  const ranIdx = Math.floor( Math.random() * 3);
  return options[ranIdx];
};

const DrawGame = () =>{
  msg.innerHTML = "Game is drawn ! play Again";
  msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin ,userChoice,CompChoice) => {
 if(userWin){

  userScore++;
  userScorePara.innerHTML = userScore;

  msg.innerHTML = `you win ! your ${userChoice} beats ${CompChoice}`;
  msg.style.backgroundColor="green";
 }
 else{
  compScore++;
  CompScorePara.innerHTML = compScore;
  msg.innerHTML = `you loss ! ${CompChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";
 }
};

const playGame=(userChoice) => {
  
  //generate computer choice  modulator

  const CompChoice = genCompChoice();

  if(userChoice === CompChoice){
    //game draw:
    DrawGame();
  }
  else {
    let userWin = true;
    if(userChoice === "Rock"){
      // scissors, paper
      userWin = CompChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
      // rock , scissors
      userWin = CompChoice === "scissor" ? false:true;
    }
    else{
      //rock paper
      CompChoice === "Rock" ? false:true;
    }
    showWinner(userWin ,userChoice,CompChoice);
  }
};

choices.forEach((choice) => {
  
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});