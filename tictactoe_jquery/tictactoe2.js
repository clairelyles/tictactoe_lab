
$(function() {
	console.log("HERE");
	var counter = 0;
	var clearBoard = $('#refresh');
	var square = $('.cell');
	var winningCombo = [[0,1,2],
						[3,4,5],
						[6,7,8],
						[0,4,8],
						[2,4,6],
						[0,3,6],
						[1,4,7],
						[2,5,8]
						];

	// eliminate for loop
	square.on('click', function() {
		if ($(this).text() === "X" || $(this).text() === "O") {
			return;
		}
		counter += 1
		if (counter % 2 === 0) {
			$(this).text("O");
		} 
		else {
			$(this).text("X");
		}
			checkForWinner();		
	})

	clearBoard.on('click', function() {
		$(square).text("");
	})

	var checkForWinner = function() {
		for (var i = 0; i < winningCombo.length; i++) {
			if (square[winningCombo[i][0]].innerText !== "" &&
				square[winningCombo[i][0]].innerText === square[winningCombo[i][1]].innerText &&
				square[winningCombo[i][1]].innerText === square[winningCombo[i][2]].innerText) {
					alert('You won ' + square[winningCombo[i][2]].innerText + ". Winner winner chicken dinner!");
				return;
			}
		}
	}

});


