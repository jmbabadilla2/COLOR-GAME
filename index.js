let interval1, interval2, interval3;
let winScore = 0;
let loseScore = 0;
let chosenColor = null;
let modal = document.getElementById('modal');
let modalText = document.getElementById('modal-text');
let yesButton = document.getElementById('yes-button');
let noButton = document.getElementById('no-button');
let audio = new Audio('images/playEffect.wav');


function sparkle1() {
  let box1 = document.getElementById('box1');
  let colors = ['red', 'green', 'blue', 'yellow'];
  let chosen_color = Math.floor(Math.random() * colors.length);
  box1.style.backgroundColor = colors[chosen_color];

}

function sparkle2() {
  let box2 = document.getElementById('box2');
  let colors = ['red', 'green', 'blue', 'yellow'];
  let chosen_color = Math.floor(Math.random() * colors.length);
  box2.style.backgroundColor = colors[chosen_color];

}

function sparkle3() {
  let box3 = document.getElementById('box3');
  let colors = ['red', 'green', 'blue', 'yellow'];
  let chosen_color = Math.floor(Math.random() * colors.length);
  box3.style.backgroundColor = colors[chosen_color];

}

function start() {
  interval1 = setInterval(sparkle1, 100);
  interval2 = setInterval(sparkle2, 100);
  interval3 = setInterval(sparkle3, 100);
  document.getElementById('start').disabled = true;
  document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = false);
  audio.loop = true;
  audio.play();
}

function stop() {
  clearInterval(interval1);
  clearInterval(interval2);
  clearInterval(interval3);
  document.getElementById('start').disabled = false;
  document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = true);
  checkGameEnd();
}

function chooseColor(color) {
  if (document.getElementById('start').disabled === true) {
    chosenColor = color;
    checkColor();
    audio.pause();
    document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = true);
  } else {
    alert('Di mo pa pinipindot yung Start button!');
    document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = true);
  }
}

function checkColor() {
  let boxes = document.querySelectorAll('.box');
  let colorCount = 0;
  boxes.forEach(box => {
    if (box.style.backgroundColor === chosenColor) {
      colorCount++;
    }
  });
  if (colorCount >= 2) {
    winScore++;
    document.getElementById('winScore').innerText = winScore;
    stop();
    let audio2 = new Audio('images/win.wav');
      audio2.play();
    if (winScore === 10) {
      modalText.innerText = 'You win! Do you want to play again?';
      showModal();
    } else {
      alert('You win!');
      
    }
  } else {
    loseScore++;

    document.getElementById('loseScore').innerText = loseScore;
    stop();
    let audio1 = new Audio('images/gamelose.wav');
      audio1.play();
    if (loseScore === 10) {
      modalText.innerText = 'You lose! Do you want to play again?';
      showModal();
    } else {
      alert('talo ka!');
      
    }
  }
}

function checkGameEnd() {
  if (winScore === 10 || loseScore === 10) {
    showModal();
  }
}

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

function resetScores() {
  winScore = 0;
  loseScore = 0;
  document.getElementById('winScore').innerText = winScore;
  document.getElementById('loseScore').innerText = loseScore;
}

function playAgain() {
  resetScores();
  hideModal();
  start();
}

function quitGame() {
  resetScores();
  hideModal();
}

