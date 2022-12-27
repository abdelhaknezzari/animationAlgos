import { Obstacles } from "./Obstacles";
import { Robot } from "./Robot";

export class World {
    robot= new Robot();
    obstacles= new Obstacles();

    animate() {
       this.obstacles.show();
     //  this.robot.animate();       
    }
}