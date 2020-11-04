//list of cities that are draggable
let cities = document.getElementsByClassName("city")
for(let city of cities){
    city.setAttribute("draggable", "true");
    // city.setAttribute("ondragstart", "dragStart(event)");
    // city.setAttribute("ondragend", "dragEnd(event)");
}
//map of Israel 
//data data-target and data-accept 