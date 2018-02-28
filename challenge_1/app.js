var turn = true;

// adding moves
function addMove (id)  {
  if(!document.getElementById(id).innerHTML) {
    var el = document.getElementById(id);
    if(turn) {
      el.innerHTML = 'X';
      el.value = 'X';
    } else {
      el.value = 'O';
      el.innerHTML = 'O';
    }
    turn = !turn; 
    checkWinner(id);
  } else {
    alert('this space is already taken, try another spot');
  }  
}

// check winner
function checkWinner (id) {
  // check vertical
  checkVertical(id);
  // check horizontal
  checkHorizontal(id);
  // check major diagonal
  if (id === '1' || id === '5' || id === '9') {
    checkMajorDiagonal(id);
  }
  // check minor diagonal
  if (id === '3' || id === '5' || id === '7') {
    checkMinorDiagonal(id);
  }
}

function checkVertical (id) {
  if (id === '1' || id === '4' || id === '7') {
    if(value(1) === value(4) && value(4) === value(7)) {
      alert('winner is ' + value(id));
    }
  }
  if (id === '2' || id === '5' || id === '8') {
    if(value(2) === value(5) && value(5) === value(8)) {
      alert('winner is ' + value(id));
    }
  }
  if (id === '3' || id === '6' || id === '9') {
    if(value(3) === value(6) && value(6) === value(9)) {
      alert('winner is ' + value(id));
    }
  }
}

function checkHorizontal (id) {
  if (id === '1' || id === '2' || id === '3') {
    if(value(1) === value(2) && value(2) === value(3)) {
      alert('winner is ' + value(id));
    }
  }
  if (id === '4' || id === '5' || id === '6') {
    if(value(4) === value(5) && value(5) === value(6)) {
      alert('winner is ' + value(id));
    }
  }
  if (id === '7' || id === '8' || id === '9') {
    if(value(7) === value(8) && value(8) === value(9)) {
      alert('winner is ' + value(id));
    }
  }

}

function checkMajorDiagonal (id) {
  if(value(1) === value(5) && value(5) === value(9)) {
      alert('winner is ' + value(id));
  }
}

function checkMinorDiagonal (id) {
  if(value(3) === value(5) && value(5) === value(7)) {
      alert('winner is ' + value(id));
  }
}

function value (id) {
  return document.getElementById(id).value;
}

// click handler 
document.addEventListener("click", function(e){
  var id = e.target.id;
  if(id && id > 0 && id <= 9){
    addMove(id);
  }
});

