import { SensorDistance } from "./Obstacles";
import { Position } from "./Robot";
import { Speed } from "./SpeedController";

export default interface SpeedControllerIf {
    calcWheelsSpeed(sensorObstDistances: SensorDistance[], currentSpeed: Speed, robotPosition: Position): Speed;
}