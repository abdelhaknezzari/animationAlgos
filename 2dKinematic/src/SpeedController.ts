import { Point } from "./Obstacles";

export interface Speed {
    right:number,
    left:number
}

export class SpeedController {

     calcWheelsSpeed( obstacleDistances: Array<Point>,currentSpeed:Speed  ) {
        if( obstacleDistances.some( point => point.d < 40 ) ) {
            return {
               right: currentSpeed.right * (-1),
               left: currentSpeed.left * (-1),
            }

        }
        return currentSpeed;
     }

}