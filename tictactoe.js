
var counter = 0;
var clearBoard = "";
var winner = document.getElementById('winner');

$(function() {
	$('ball').ball.on('click', function )
})

document.addEventListener('DOMContentLoaded', function(){
	// anonymous function needs to be at top
	var square = document.getElementsByClassName('cell');
	var refresh = document.getElementById('refresh');
	var winningCombo = [[0,1,2],
						[3,4,5],
						[6,7,8],
						[0,4,8],
						[2,4,6],
						[0,3,6],
						[1,4,7],
						[2,5,8]
						];

	// named function can be anywhere in the code
	function checkForWinner() {
		// each click runs checkForWinner function
		for (var i = 0; i < winningCombo.length; i++) {
			if (square[winningCombo[i][0]].innerText !== "" &&
				square[winningCombo[i][0]].innerText === square[winningCombo[i][1]].innerText &&
				square[winningCombo[i][1]].innerText === square[winningCombo[i][2]].innerText) {
				alert('You won ' + square[winningCombo[i][2]].innerText + ". Great job!");
				return;
				winner = square[winningCombo[i][2]].innerText;
			};
		}
	}

	refresh.addEventListener('click', function() {
		for (i = 0; i < square.length; i++) {
			// console.log('alert!');
			square[i].innerText = clearBoard
		}
	});


	for (var i = 0; i < square.length; i++) {
		square[i].addEventListener("click", function() {
			if (this.innerText === "X" || this.innerText === "O") {
				return;
			}
			// else
			counter += 1;

			if (counter % 2 === 0) {
				this.innerText = "O";
			}
			else {
				this.innerText = "X";
			}
			checkForWinner();
		})

	}
});



