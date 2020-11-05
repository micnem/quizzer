let question = document.createElement("div")
question.setAttribute("id", "question")
let h1 = document.createElement("h1")
h1.innerHTML = "which is funniest?"
question.appendChild(h1)
question.style.textAlign = "center"
document.body.appendChild(question)

// ////////////////////////////////


let container = document.createElement("div")
container.setAttribute("id", "container")
container.style.dispay = "flex";
container.style.flexWrap = "wrap"
document.body.appendChild(container)

// /////////////////////////////

let images = ['dog.jpeg', 'pineapple.jpeg', 'pisa.jpeg', 'horse.jpeg', 'monkey.jpeg']

let answer = document.createElement("div")
answer.setAttribute("id", "answer")
answer.addEventListener("mouseover", correct)
container.appendChild(answer)



for (var i = 0; i < images.length; i++) {
	let box = document.createElement("div")
	let image = document.createElement("img")
	image.setAttribute("src", images[i])
	box.appendChild(image)
	box.setAttribute("id", "bad")
	container.appendChild(box)
}

let bad = document.getElementById('bad')

function wrong(){
	bad.style.animation = "swing 1s 3"
}

bad.addEventListener("mouseover", wrong)


function next(){
	location.href = "question.4.html"
}

function correct(){
	answer.setAttribute("class", "answer")
	let btn = document.createElement("button")
	btn.setAttribute("id", "btn")
	btn.addEventListener("click", next)
	btn.innerHTML = "next"
	document.body.appendChild(btn)
}



