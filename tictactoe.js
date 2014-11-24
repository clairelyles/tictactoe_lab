
var counter = 0;
var clearBoard = "";


document.addEventListener('DOMContentLoaded', function(){
	var square = document.getElementsByClassName('cell');
	var refresh = document.getElementById('refresh');
	var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

	function checkForWinner() {
		// each click runs checkForWinner function
		console.log('checking',square);
		for (var i = 0; i < winningCombo.length; i++) {
			if (square[winningCombo[i][0]].innerText !== "" &&
				square[winningCombo[i][0]].innerText === square[winningCombo[i][1]].innerText &&
				square[winningCombo[i][1]].innerText === square[winningCombo[i][2]].innerText) {
				alert('You won ' + square[winningCombo[i][2]].innerText + ". Great job!");
				return square[winningCombo[i][2]].innerText;
			};
		}
	}

	refresh.addEventListener('click', function() {
		for (i = 0; i < square.length; i++) {
			console.log('alert!');
			square[i].innerText = clearBoard
		}
	});


	// console.log(squares[i]innerText);
	for (var i = 0; i < square.length; i++) {
		square[i].addEventListener("click", function() {
			// alert(this.innerText);
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


	// Winning Combinations
	// winningCombo[i][0] && winningCombo[i][1] && winningCombo[i][3]

});



