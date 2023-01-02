
import { World } from "./World";

const world = new World();
document.getElementById("right").addEventListener( "click", event => {
    world.handleEvent(event as PointerEvent);

});

document.getElementById("left").addEventListener( "click", event => {
    world.handleEvent(event as PointerEvent);

});

document.getElementById("forward").addEventListener( "click", event => {
    world.handleEvent(event as PointerEvent);

});


document.getElementById("backward").addEventListener( "click", event => {
    world.handleEvent(event as PointerEvent);

});

document.getElementById("step").addEventListener( "click", event => {
    world.handleEvent(event as PointerEvent);

});

document.getElementById("x").addEventListener( "change", event => {
    debugger;

});

document.getElementById("y").addEventListener( "change", event => {
    debugger;

});

document.getElementById("th").addEventListener( "change", event => {
    debugger;

});

//  world.animate();
