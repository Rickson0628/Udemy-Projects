
  winner = document.querySelector("h1");

  // Random Number for Players
  oneNumber = Math.floor((Math.random() * 6) + 1);
  twoNumber= Math.floor((Math.random() * 6) + 1);

  // Changing Image
  oneImage = document.querySelector(".img1");
  twoImage = document.querySelector(".img2");

  oneImage.src = "images/dice" + oneNumber + ".png";
  twoImage.src = "images/dice" + twoNumber + ".png";
  
  // Changing h1 tag
  if (oneNumber > twoNumber){
    winner.textContent = "Player One wins"
  }else if (twoNumber > oneNumber){
    winner.textContent = "Player Two wins"
  }else{
    winner.textContent= "Draw"
  }

