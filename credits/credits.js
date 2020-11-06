let number = 0

let container = document.getElementById('container');


function myMove() {
	let move = setInterval(
	function () {
	container.style.bottom = number ++ + "px";
}, 10)
console.log(container)
}

myMove()

