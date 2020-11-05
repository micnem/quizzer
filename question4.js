
let number = 0

let container = document.getElementById('container');


function myMove() {
	let move = setInterval(
	function () {
	container.style.right = number ++ + "px";
}, 10)
}

myMove()