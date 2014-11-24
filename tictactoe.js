
var counter = 0;


document.addEventListener('DOMContentLoaded', function(){
	var square = document.getElementsByClassName('cell');
	// console.log returns an arraty of elements with class name "cell"
	// e.g. [div.col-]
	//console.log(box);

	//addeventlistener is a function that will look through each square 
	// on the page which is a DOM object
	for (var i = 0; i < square.length; i++) {
		square[i].addEventListener("click", function() {
			this.innertext
			counter += 1;
			if (counter % 2 === 0) {
				this.innerText = "0";
			}
			else {
				this.innerText = "X";
			}
		})
	}
});

