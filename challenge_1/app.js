var turn = true;

// adding moves
function addMove (id)  {
  if(!document.getElementById(id).innerHTML) {
    if(turn) {
      document.getElementById(id).innerHTML = 'X';
    } else {
      document.getElementById(id).innerHTML = 'O';
    }
    turn = !turn; 
  } else {
    alert('this space is already taken, try another spot');
  }  
}

// check winner

// click handler 
document.addEventListener("click", function(e){
  var id = e.target.id;
  if(id && id > 0 && id <= 9){
    addMove(id);
  }
});

