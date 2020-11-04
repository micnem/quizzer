
var x = "city";
var y = "target";
let cities = document.getElementsByClassName("city")
for(let city of cities){
    city.setAttribute("draggable", "true");
    city.setAttribute("ondragstart", "dragStart(event)");
}

let targets = document.getElementsByClassName("target")
for(let target of targets){
    target.setAttribute("ondragover", "allowDrop(event)");
    target.setAttribute("ondrop", "dragEnd(event)");
}
function dragStart(event){
    console.log(event.target.attributes[1].value)
    event.dataTransfer.setData("text", event.target.attributes[1].value);
    x = event.target.attributes[1].value;
}
function allowDrop(event){
    event.preventDefault();
}
function dragEnd(event){
        event.preventDefault();
        // retrieve the data dragged
        y = event.target.attributes[1].value;
        if(x==y){

            console.log("matches", x, y)
            let data = event.dataTransfer.getData("text");
            console.log(data);
            var dataElems = document.querySelectorAll('[data-accept]')
            event.target.appendChild(dataElems);
        }
        else{
            console.log("does not match")
        }
        
        let data = event.dataTransfer.getData("text");
        console.log("data: ",  data) //data: square1 
        
        // let box = document.getElementById(data)
        // event.target.appendChild(box);

}

