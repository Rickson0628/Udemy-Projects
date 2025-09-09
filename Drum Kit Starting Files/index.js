document.addEventListener("keydown", (event)=> {
  sound(event.key);
  addStyle(event.key);
});


document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`You clicked: ${button.className}`);
    sound(button.innerHTML);
    addStyle(button.innerHTML);
  });
});

function addStyle(button){
  document.querySelector("." + button).classList.add("pressed");

}

function sound(button){
  
    switch (button) {  
      case "w":
        new Audio("sounds/crash.mp3").play();
        break;

      case "a":
        new Audio("sounds/kick-bass.mp3").play();
        break;

      case "s":
        new Audio("sounds/snare.mp3").play();
        break;

      case "d":
        new Audio("sounds/tom-1.mp3").play();
        break;

      case "j":
        new Audio("sounds/tom-2.mp3").play();
        break;

      case "k":
        new Audio("sounds/tom-3.mp3").play();
        break;

      case "l":
        new Audio("sounds/tom-4.mp3").play();
        break;

      default:
        console.log("Unknown key");
        break;
    }
}