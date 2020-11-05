let introbanner = document.getElementById('intro_banner')
let btn = document.getElementById('bannerbtn')
let game = document.getElementById('game')
let game2 = document.getElementById('game2')
let game3 = document.getElementById('game3')
let game4 = document.getElementById('game4')
let game5 = document.getElementById('game5')
let game6 = document.getElementById('game6')
bannerbtn.addEventListener("click", clearbanner)

function clearbanner() {
	introbanner.style.display = "none"
	game.style.display = "block"
	game2.style.display = "block"
	game3.style.display = "block"
	game4.style.display = "block"
	game5.style.display = "block"
	game6.style.display = "block"
}

///////////////////////////////




let number = 0
let start = document.getElementById('startbutton')


let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let container3 = document.getElementById('container3');
let container5 = document.getElementById('container5');
let container6 = document.getElementById('container6');
let container7 = document.getElementById('container7');
let container8 = document.getElementById('container8');

let stop = document.getElementById('stopbutton')



let move;
let move2;
let move3;
let move4;
let move5;
let move6;




function Moveleft(a) {
	move = setInterval(
	function () {
	container.style.right = number ++ + "px";
}, 8)
}

function Moveright() {
	move2 = setInterval(
	function () {
	container2.style.left = number ++ + "px";
}, 8)
}


function Movediagonal() {
	move3 = setInterval(
	function () {
	container5.style.right = number ++ + "px";
	container5.style.bottom = number ++ + "px";
}, 8)
}

function Movediagonal2() {
	move4 = setInterval(
	function () {
	container6.style.left = number ++ + "px";
	container6.style.bottom = number ++ + "px";
}, 8)
}

function Movediagonal3() {
	move5 = setInterval(
	function () {
	container7.style.right = number ++ + "px";
	container7.style.top = number ++ + "px";
}, 8)
}

function Movediagonal4() {
	move6 = setInterval(
	function () {
	container8.style.left = number ++ + "px";
	container8.style.top = number ++ + "px";
}, 8)
}

function movement() {
	Moveleft()
	Moveright()
	Movediagonal()
	Movediagonal2()
	Movediagonal3()
	Movediagonal4()
}

let next_banner;
next_banner = document.getElementById('next_banner')		
nextbtn.addEventListener("click", next)

function next(){
	location.href = "credits.html"
}

let bounding;
let bounding2;
let bounding3;
let bounding4;
let bounding5;
let bounding6;


function stopmovement() {
	clearInterval(move);
	clearInterval(move2);
	clearInterval(move3);
	clearInterval(move4);
	clearInterval(move5);
	clearInterval(move6);
	bounding = container.getBoundingClientRect();
	bounding2 = container2.getBoundingClientRect();
	bounding3 = container5.getBoundingClientRect();
	bounding4 = container6.getBoundingClientRect();
	bounding5 = container7.getBoundingClientRect();
	bounding6 = container8.getBoundingClientRect();

	

	if (bounding.x < 0 || bounding.y < 0 || bounding2.x < 0 || bounding2.y < 0 || bounding3.x < 0 || bounding3.y < 0 || bounding4.x < 0 || bounding4.y < 0 || bounding5.x < 0 || bounding5.y < 0 || bounding6.x < 0 || bounding6.y < 0) {
		alert("Try again")
		location.reload()
	}
	 else {
		next_banner.style.display = "block"
	}
}



start.addEventListener("click", movement)
stop.addEventListener("click", stopmovement)





