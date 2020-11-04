let question = document.createElement("div")
question.setAttribute("id", "question")
let h1 = document.createElement("h1")
h1.innerHTML = "which is funniest?"
question.appendChild(h1)
document.body.appendChild(question)

// ////////////////////////////////


let container = document.createElement("div")
container.setAttribute("id", "container")
document.body.appendChild(container)

// /////////////////////////////

let images = ['dog.jpeg', 'pineapple.jpeg', 'pisa.jpeg', 'horse.jpeg', 'monkey.jpeg']

let answer = document.createElement("div")
answer.setAttribute("id", "answer")
answer.addEventListener("mouseover", correct)
container.appendChild(answer)

 function wrong() {
 	box.setAttribute("id", "bad")
 }


for (var i = 0; i < images.length; i++) {
	let box = document.createElement("div")
	let image = document.createElement("img")
	image.setAttribute("src", images[i])
	box.appendChild(image)
	
	if (box.addEventListener("mouseover", wrong)) {}
	container.appendChild(box)
}




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



