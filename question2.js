let div = document.createElement("div")
let h1 = document.createElement("h1")
let number;

function random() {
	number = Math.floor(Math.random() * 101);
	h1.innerHTML = number
	div.appendChild(h1)
	div.style.display = "none"
	div.setAttribute("id", "div")
	document.body.appendChild(div)
}

function banner_show(){
	random()
	div.style.display = "block"
}

function banner_hide(){
	div.style.display = "none"
}

let banner = setTimeout(banner_show, 2000)
let banner2 = setTimeout(banner_hide, 2500)


let submit = document.getElementById("submit")
let input = document.getElementById("text")

submit.addEventListener("click", correct)

function correct() {
	if (input.value == number) {
		location.href = "question.3.html"
	} else {
		random()
		banner = setTimeout(banner_show, 2000)
		banner2 = setTimeout(banner_hide, 2500)
	}
}

let label = document.createElement("label")
label.innerHTML = "BONUS: find the event on the button"
let bonus = document.createElement("button")
bonus.addEventListener("contextmenu", surprise)
