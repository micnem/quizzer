let introbanner = document.getElementById('intro_banner')
let page = document.getElementById('page')
let btn = document.getElementById('bannerbtn')
let banner;
let banner2;
let timer;

function clearbanner() {
	introbanner.style.display = "none"


	// timer start

	let container = document.createElement("div")
	timer = document.createElement("h1")
	timer.style.textAlign = "center"
	container.appendChild(timer)
	document.body.appendChild(container)
	let timernumber = 4
	function timerbanner() {
	timer.innerHTML = "The number will appear in " + timernumber -- +  " seconds!"
		if (timernumber < 0) {
			clearInterval(inter)
			container.style.display = "none"
		}
	}
	let inter = setInterval(timerbanner, 1000)

	// random number
	banner = setTimeout(banner_show, 5000)
	banner2 = setTimeout(banner_hide, 5500)
}
bannerbtn.addEventListener("click", clearbanner)




////////////////

let div = document.createElement("div")
let h1 = document.createElement("h1")
let number;

function random() {
	number = Math.floor(Math.random() * 101);
	h1.style.textAlign = "center"
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

// let banner = setTimeout(banner_show, 5000)
// let banner2 = setTimeout(banner_hide, 5500)


let submit = document.getElementById("submit")
let input = document.getElementById("text")

submit.addEventListener("click", correct)

function correct() {
	if (input.value == number) {
		let banner3 = setTimeout(banner_show2, 500)
		let banner4 = setTimeout(banner_hide2, 750)
	} else {
		random()
		banner = setTimeout(banner_show, 2000)
		banner2 = setTimeout(banner_hide, 2500)
	}
}


////////////////////////////////////////////////////////////////////////////


let div2 = document.createElement("div")
let h2 = document.createElement("h1")
let number2;

function random2() {
	number2 = Math.floor(Math.random() * 101);
	h2.style.textAlign = "center"
	h2.innerHTML = number2
	div2.appendChild(h1)
	div2.style.display = "none"
	div2.setAttribute("id", "div2")
	document.body.appendChild(div2)
}

function banner_show2(){
	random2()
	div2.style.display = "block"
}

function banner_hide2(){
	div2.style.display = "none"
}

let submit2 = document.getElementById("submit2")
let input2 = document.getElementById("text2")

submit2.addEventListener("click", correct)

function correct() {
	if (input2.value == number2) {
		let banner3 = setTimeout(banner_show3, 0)
		let banner4 = setTimeout(banner_hide3, 50)
	} else {
		random2()
		banner = setTimeout(banner_show2, 500)
		banner2 = setTimeout(banner_hide2, 750)
	}
}



////////////////////////////////////////////////////////////

let div3 = document.createElement("div")
let h3 = document.createElement("h1")
let number3;

function random3() {
	number3 = Math.floor(Math.random() * 101);
	h3.style.textAlign = "center"
	h3.innerHTML = number3
	div3.appendChild(h3)
	div3.style.display = "none"
	div3.setAttribute("id", "div3")
	document.body.appendChild(div3)
}

function banner_show3(){
	random3()
	div3.style.display = "block"
}

function banner_hide3(){
	div3.style.display = "none"
}




let submit3 = document.getElementById("submit3")
let input3 = document.getElementById("text3")

submit3.addEventListener("click", correct)

let next_banner;
next_banner = document.getElementById('next_banner')		
nextbtn.addEventListener("click", next)

function correct() {
	if (input3.value == number3) {
		next_banner.style.display = "block"
	} else {
		random3()
		banner3 = setTimeout(banner_show3, 0)
		banner4 = setTimeout(banner_hide3, 50)
	}
}


