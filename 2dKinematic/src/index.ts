
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
 world.animate();
