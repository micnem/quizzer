let banner = document.getElementById('username_banner')
let page = document.getElementById('page')
let btn = document.getElementById('button')

function clearbanner() {
	banner.style.display = "none"
	page.style.opacity = "1";
	
	
}
console.log(banner)
btn.addEventListener("click", clearbanner)
