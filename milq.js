const milq_array = []
milq_array.push('gratitude.png',
'elegance.png',
'patience.png',
'tranquility.png', 
'pride.png', 
'joy.png', 
'freedom.png',
'creativity.png',
'unity.png',
'hope.png',
'harmony.png',
'new.png')

num_badges = 12
y = 465
x = 50



function getRandMilqIndex() {
  return Math.floor(Math.random() * num_badges)
}

function createBoard() {
  for (let j = 0; j < 25; j++) {
    let img = new Image();
    img.src = milq_array[getRandMilqIndex()];
    img.classList.add("piece")
    var div = document.getElementById("piece-div");
    if (j == 12) {
      img.style.visibility = "hidden";
    }
    div.append(img);
  }
}

function refreshBoard() {
  var pieces = document.getElementById('piece-div');
      while (pieces.firstChild) {
        pieces.removeChild(pieces.lastChild);
      }
      createBoard();
      console.log("Clicked");
}

function togglePiece(badge, button) {
  const index = milq_array.indexOf(badge + '.png');
  if (index > -1) {
    milq_array.splice(index, 1);
    button.style.border = 'none';
    num_badges--;
  } else {
    milq_array.push(badge + '.png');
    button.style.border = 'solid 4px #9DBBE8';
    num_badges++;
  }
  
  
  refreshBoard();
}
const buttonGroupPressed = e => {
  const isButton = e.target.nodeName === 'button';

  if (isButton) {
    return;
  }
  return e.target.id;
}

$(document).ready(function() {
    createBoard();
    const buttonGroup = document.getElementById('buttons');

    
    buttonGroup.addEventListener("click", buttonGroupPressed);
  });

