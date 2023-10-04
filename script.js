const playBoard =document.querySelector(".play-board");

var foodX, foodY;
var snakeX=5, snakeY=10;
var snakeBody = [];
var velocityX=0, velocityY =0;

const changeFoodPosition =()=>{
    //Passing a random 0 -30 value as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;

}

const changeDirection = (e) =>{
  //changing velocity value based on key press
  if(e.key  === "ArrowUp") {
    velocityX=-1;
    velocityY=0;
  }else if(e.key === "ArrowDown"){
    velocityX=1;
    velocityY=0;
  }else if(e.key === "ArrowLeft"){
    velocityX=0;
    velocityY=-1;
  }else if(e.key === "ArrowRight"){
    velocityX=0;
    velocityY=1;
  }

  initGame()
}

const initGame =()=>{
    let htmlMarkup =`<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    
//checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY){
      changeFoodPosition();
      snakeBody.push([foodX,foodY]); // pushing food position to snake body array
      console.log(snakeBody)
    }

    //updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    htmlMarkup +=`<div class="head" style="grid-area: ${snakeX} / ${snakeY}"></div>`;
    playBoard.innerHTML=htmlMarkup;
}
changeFoodPosition();
setInterval(initGame, 125);

document.addEventListener("keydown",changeDirection)

