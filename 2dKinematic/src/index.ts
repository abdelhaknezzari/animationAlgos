
import { AlgorithmToRun, World } from "./World";

const world = new World();


["right", "left", "forward", "backward", "step", "stop"]
    .concat(Object.keys(AlgorithmToRun))
    .forEach(button => {
        document.getElementById(button).addEventListener("click", event => {
            world.handleEvent(event as PointerEvent);
        });
    }
    );

["x", "y", "th"].forEach(input => {
    document.getElementById(input).addEventListener("change", event => {
        world.handleEvent(event as PointerEvent);
    });
});

world.animate();
