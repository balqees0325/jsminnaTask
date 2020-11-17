alert('hello');

const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');

const doorImage3 = document.getElementById('door3');

startButton = document.getElementById('start');

const numClosedDoors =3;
let openDoor1;
let openDoor2;
let openDoor3; 

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';


let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';


let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const isClicked = door => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}
const playDoor = () => {
  numClosedDoors-- 
  if(numClosedDoors === 0) {
    gameOver();
  }
}
 const randomChoreDoorGenerator = () => {
 let choreDoor = Math.floor(Math.random() * numClosedDoors);
 if(choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
 } else if(choreDoor === 1) {
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
 } else (choreDoor === 1){
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
 }
}

door1.onclick = () => {
  doorImage1.src = openDoor1

playDoor();
};
door2.onclick = () => {
  
doorImage2.src= openDoor2;
playDoor();
};
doorImage3.onclick = () => {
 
doorImage3.src= openDoor3;
playDoor();
};
 const gameOver = (status) => {
   if(status === 'Win!') { startButton.innerHTML = 'You win! play again?';
 }
randomChoreDoorGenerator()