/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Obstacles.ts":
/*!**************************!*\
  !*** ./src/Obstacles.ts ***!
  \**************************/
/*! exports provided: Obstacles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obstacles", function() { return Obstacles; });
var Obstacles = /** @class */ (function () {
    function Obstacles() {
        this.canvas = document.getElementById('canvas');
        addEventListener('click', function (event) {
        });
        this.context = this.canvas.getContext("2d");
        this.generateObstacles();
    }
    Obstacles.prototype.generateObstacles = function () {
        var _this = this;
        this.walls = [
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: 0, y: num }; }),
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.width, y: num }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: 0 }; }),
            Array.from({ length: this.canvas.width * 0.7 }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height * 0.3 }; }),
            Array.from({ length: this.canvas.width * 0.7 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.width - num, y: _this.canvas.height * 0.7 }; })
        ];
    };
    Obstacles.prototype.calcDistancesFromSensors = function (sensors) {
        var _this = this;
        var wallsPoints = this.walls.reduce(function (prv, cur) { return prv.concat(cur); }, []);
        sensors.map(function (sensor) {
            var _a;
            return {
                d: (_a = wallsPoints.map(function (wallPoint) {
                    return {
                        x: wallPoint.x,
                        y: wallPoint.y,
                        d: _this.distanceBetweenRobotAndObstacle(sensor, wallPoint)
                    };
                }).sort(function (prv, cur) {
                    if (prv.d < cur.d) {
                        return -1;
                    }
                    else if (prv.d > cur.d) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                    ;
                })[0]) === null || _a === void 0 ? void 0 : _a.d,
                side: sensor.side
            };
        });
        return wallsPoints;
    };
    Obstacles.prototype.calcDistances = function (robotPosition) {
        var _this = this;
        return this.walls.reduce(function (prv, cur) { return prv.concat(cur); }, []).map(function (wallPoint) {
            return {
                x: wallPoint.x,
                y: wallPoint.y,
                d: _this.distanceBetweenRobotAndObstacle(robotPosition, wallPoint)
            };
        }).sort(function (prv, cur) {
            if (prv.d < cur.d) {
                return -1;
            }
            else if (prv.d > cur.d) {
                return 1;
            }
            else {
                return 0;
            }
            ;
        });
    };
    Obstacles.prototype.distanceBetweenRobotAndObstacle = function (robotPosition, point) {
        return Math.sqrt(Math.pow(robotPosition.x - point.x, 2) + Math.pow(robotPosition.y - point.y, 2));
    };
    Obstacles.prototype.show = function () {
        var _this = this;
        // this.calcDistances();
        this.walls.forEach(function (wall) { return wall.forEach(function (point) {
            _this.plotCircle(point);
        }); });
    };
    Obstacles.prototype.plotCircle = function (point) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, Obstacles.rWall, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillText("Hello World", 10, 50);
    };
    Obstacles.rWall = 3;
    return Obstacles;
}());



/***/ }),

/***/ "./src/Robot.ts":
/*!**********************!*\
  !*** ./src/Robot.ts ***!
  \**********************/
/*! exports provided: Robot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Robot", function() { return Robot; });
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");

var Robot = /** @class */ (function () {
    function Robot() {
        this.dt = 0.01;
        this.position = { x: 130, y: 145, th: Math.PI / 2 };
        this.speed = { right: 100, left: 100 };
        this.sonarSensors = new _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["SonarSensors"]();
        this.canvas = document.getElementById('canvas');
        addEventListener('click', function (event) {
        });
        this.context = this.canvas.getContext("2d");
        // this.plotRobot(268, 234);
    }
    Robot.prototype.plotCircle = function (poistion) {
        this.context.beginPath();
        this.context.arc(poistion.x, poistion.y, 15, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    };
    Robot.prototype.plotRobot2 = function (poistion) {
        var _this = this;
        var previousPosition = poistion;
        var moveAndTurn = function (d, th) {
            var xCoord = previousPosition.x + d * Math.cos(th * Math.PI / 180);
            var yCoord = previousPosition.y + d * Math.sin(th * Math.PI / 180);
            previousPosition = { x: xCoord, y: yCoord, th: th };
            _this.context.lineTo(xCoord, yCoord);
        };
        this.context.moveTo(poistion.x, poistion.y + 2);
        //
        moveAndTurn(Robot.robotAttr.rH, 90 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 90 - 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -45 + poistion.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, poistion.th);
        moveAndTurn(4, 90 + poistion.th);
        moveAndTurn(4, 0 + poistion.th);
        moveAndTurn(4, -90 + poistion.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, 0 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL, 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSW, -45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, 180 + 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rH, -90 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL, -45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSW, -135 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -225 + poistion.th);
        moveAndTurn(Robot.robotAttr.rW, 180 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL, -90 - 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + poistion.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 90 - 45 + poistion.th);
        // this.context.rotate(poistion.th);
        this.context.stroke();
        this.context.fill();
    };
    Robot.prototype.getPosition = function () {
        return this.position;
    };
    Robot.prototype.getSpeed = function () {
        return this.speed;
    };
    Robot.prototype.animate = function (speed) {
        this.speed = speed;
        var delta = this.kinematic(speed.left, speed.right);
        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.th += delta.dth;
        // {x:this.canvas.width/2- this.robot.robotAttr.rH/2,
        // y:this.canvas.height/2 + this.robot.robotAttr.rW/2,
        // th:-90}
        // this.plotRobot(this.position.x, this.position.y, this.position.theta);
        // this.plotCircle( this.position);
        this.plotRobot2(this.position);
    };
    Robot.prototype.kinematic = function (leftWeelSpeed, rightWheelSpeed) {
        var linearVelocity = (rightWheelSpeed + leftWeelSpeed) / 2;
        var angularVelocity = rightWheelSpeed - leftWeelSpeed;
        var dth = (2 * Math.PI * Robot.robotAttr.WheelR / Robot.robotAttr.rW) * angularVelocity * this.dt;
        var theta = this.position.th + dth;
        var dx = Robot.robotAttr.WheelR * linearVelocity * Math.cos(theta) * this.dt;
        var dy = Robot.robotAttr.WheelR * linearVelocity * Math.sin(theta) * this.dt;
        return { dx: dx, dy: dy, dth: dth };
    };
    Robot.prototype.getSensors = function () {
        return this.sonarSensors.calcSensorsPositions(this.getPosition());
    };
    Robot.robotAttr = {
        WheelR: 5,
        rH: 50,
        rW: 30,
        rSL: 20,
        rSW: 3
    };
    return Robot;
}());



/***/ }),

/***/ "./src/SonarSensors.ts":
/*!*****************************!*\
  !*** ./src/SonarSensors.ts ***!
  \*****************************/
/*! exports provided: SonarSensors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonarSensors", function() { return SonarSensors; });
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");

var SonarSensors = /** @class */ (function () {
    function SonarSensors() {
    }
    SonarSensors.prototype.calcSensorsPositions = function (robotPosition) {
        return ["frontLeft", "frontRight", "backLeft", "backRight"]
            .map(function (sensorSide) {
            if (sensorSide === "backLeft") {
                return {
                    x: robotPosition.x - Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    y: robotPosition.y - Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    side: sensorSide
                };
            }
            if (sensorSide === "backRight") {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW + Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    y: robotPosition.y - Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    side: sensorSide
                };
            }
            if (sensorSide === "frontLeft") {
                return {
                    x: robotPosition.x - Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    side: sensorSide
                };
            }
            if (sensorSide === "frontRight") {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW + Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + Math.cos(Math.PI / 4) * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rSL,
                    side: sensorSide
                };
            }
            return undefined;
        });
    };
    return SonarSensors;
}());



/***/ }),

/***/ "./src/SpeedController.ts":
/*!********************************!*\
  !*** ./src/SpeedController.ts ***!
  \********************************/
/*! exports provided: SpeedController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedController", function() { return SpeedController; });
var SpeedController = /** @class */ (function () {
    function SpeedController() {
    }
    SpeedController.prototype.calcWheelsSpeed = function (obstacleDistances, currentSpeed) {
        if (obstacleDistances.some(function (point) { return point.d < 10; })) {
            return {
                right: currentSpeed.right * (-1),
                left: currentSpeed.left * (-1),
            };
        }
        return currentSpeed;
    };
    return SpeedController;
}());



/***/ }),

/***/ "./src/World.ts":
/*!**********************!*\
  !*** ./src/World.ts ***!
  \**********************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var _Obstacles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Obstacles */ "./src/Obstacles.ts");
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");



var World = /** @class */ (function () {
    function World() {
        this.robot = new _Robot__WEBPACK_IMPORTED_MODULE_1__["Robot"]();
        this.obstacles = new _Obstacles__WEBPACK_IMPORTED_MODULE_0__["Obstacles"]();
        this.conroller = new _SpeedController__WEBPACK_IMPORTED_MODULE_2__["SpeedController"]();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    World.prototype.animate = function () {
        var _this = this;
        this.clear();
        this.obstacles.show();
        var distances = this.obstacles.calcDistances(this.robot.getPosition());
        debugger;
        var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        var speed = this.conroller.calcWheelsSpeed(distances, this.robot.getSpeed());
        this.robot.animate(speed);
        // this.robot.plotRobot2({x:this.canvas.width/2- this.robot.robotAttr.rH/2,y:this.canvas.height/2 + this.robot.robotAttr.rW/2,th:-90});
        window.requestAnimationFrame(function () { _this.animate(); });
    };
    World.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return World;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./World */ "./src/World.ts");

var world = new _World__WEBPACK_IMPORTED_MODULE_0__["World"]();
world.animate();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Xb3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7SUFRSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDL0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUMvSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUM5RyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEdBQUcsRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDeEksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxHQUFHLEVBQUcsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFZO1NBQy9KLENBQUM7SUFDTixDQUFDO0lBRUEsNENBQXdCLEdBQXhCLFVBQXlCLE9BQWdCO1FBQXpDLGlCQTRCQztRQTNCRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxVQUFDLEdBQUcsRUFBQyxHQUFHLElBQUssVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLEVBQUMsRUFBRSxDQUFFLENBQUM7UUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FDUCxnQkFBTTs7WUFFRixPQUFPO2dCQUNQLENBQUMsUUFBQyxXQUFXLENBQUMsR0FBRyxDQUNiLG1CQUFTO29CQUNOLE9BQU87d0JBQ04sQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNiLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQzt3QkFDYixDQUFDLEVBQUUsS0FBSSxDQUFDLCtCQUErQixDQUFDLE1BQTZCLEVBQUMsU0FBUyxDQUFDO3FCQUN2RSxDQUFDO2dCQUNkLENBQUMsQ0FDSixDQUFDLElBQUksQ0FBRSxVQUFDLEdBQUcsRUFBQyxHQUFHO29CQUNaLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ2I7eUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RCLE9BQU8sQ0FBQyxDQUFDO3FCQUNaO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxDQUFDO3FCQUNaO29CQUFBLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBDQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQ2xCLENBQUM7UUFDSCxDQUFDLENBQ0osQ0FBQztRQUNGLE9BQU8sV0FBVyxDQUFDO0lBQ3RCLENBQUM7SUFFRixpQ0FBYSxHQUFiLFVBQWUsYUFBc0I7UUFBckMsaUJBa0JDO1FBakJHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsVUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFLLFVBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxFQUFDLEVBQUUsQ0FBRSxDQUFDLEdBQUcsQ0FDM0QsbUJBQVM7WUFDTixPQUFPO2dCQUNOLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFFLEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLEVBQUMsU0FBUyxDQUFDO2FBQ3ZELENBQUM7UUFDZCxDQUFDLENBQ0osQ0FBQyxJQUFJLENBQUUsVUFBQyxHQUFHLEVBQUMsR0FBRztZQUNaLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDYjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLENBQUM7YUFDWjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsQ0FBQzthQUNaO1lBQUEsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1EQUErQixHQUEvQixVQUFpQyxhQUFzQixFQUFDLEtBQVc7UUFDN0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFBQSxpQkFPQztRQU5HLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBRSxlQUFLO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFFLEVBRndCLENBRXhCLENBQUMsQ0FBQztJQUdULENBQUM7SUFFRCw4QkFBVSxHQUFWLFVBQVcsS0FBWTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBMUZNLGVBQUssR0FBRyxDQUFDLENBQUM7SUE0RnJCLGdCQUFDO0NBQUE7QUFuR3FCOzs7Ozs7Ozs7Ozs7O0FDVHRCO0FBQUE7QUFBQTtBQUFzRDtBQVV0RDtJQW1CSTtRQVBBLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFVixhQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFjLENBQUM7UUFDM0QsVUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFXLENBQUM7UUFDM0MsaUJBQVksR0FBQyxJQUFJLDBEQUFZLEVBQUUsQ0FBQztRQUk1QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3JFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLDRCQUE0QjtJQUNoQyxDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLFFBQWtCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBVSxHQUFWLFVBQVcsUUFBa0I7UUFBN0IsaUJBcUNDO1FBcENHLElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBRWhDLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxFQUFFLEVBQVU7WUFDdEMsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3JFLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyRSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQUUsQ0FBQztZQUNoRCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEVBQUU7UUFFRixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUMxRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDL0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFH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SyxHQUFHLElBQUksNENBQUssRUFBRSxDQUFDO0FBQzFCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU2Vuc29yIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxyXG4gICAgeTogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHlcclxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3RcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBPYnN0YWNsZXMge1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cclxuICAgIHdhbGxzOiBBcnJheTxBcnJheTxQb2ludD4+O1xyXG4gICAgb2JzdGFjbGVzOiBBcnJheTxQb2ludD47XHJcbiAgICBzdGF0aWMgcldhbGwgPSAzO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU9ic3RhY2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlT2JzdGFjbGVzKCkge1xyXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiAwLCB5OiBudW19OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy5oZWlnaHQgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMud2lkdGgsIHk6IG51bSB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHR9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiAwfTsgfSkgYXMgW1BvaW50XSxcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43ICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjMgfTsgfSkgYXMgW1BvaW50XSxcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43ICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCAtIG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyB9OyB9KSBhcyBbUG9pbnRdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAgY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHNlbnNvcnM6U2Vuc29yW10pIHtcclxuICAgICAgICBjb25zdCB3YWxsc1BvaW50cyA9IHRoaXMud2FsbHMucmVkdWNlKCAocHJ2LGN1cikgPT4gcHJ2LmNvbmNhdChjdXIpLFtdICk7XHJcbiAgICAgICAgc2Vuc29ycy5tYXAoXHJcbiAgICAgICAgICAgIHNlbnNvciA9PiBcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkOndhbGxzUG9pbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMuZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZShzZW5zb3IgYXMgdW5rbm93biBhcyBQb3NpdGlvbix3YWxsUG9pbnQpICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pWzBdPy5kLFxyXG4gICAgICAgICAgICAgICAgc2lkZTpzZW5zb3Iuc2lkZVxyXG4gICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHdhbGxzUG9pbnRzO1xyXG4gICAgIH1cclxuXHJcbiAgICBjYWxjRGlzdGFuY2VzKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHMucmVkdWNlKCAocHJ2LGN1cikgPT4gcHJ2LmNvbmNhdChjdXIpLFtdICkubWFwKFxyXG4gICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeDp3YWxsUG9pbnQueCxcclxuICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUocm9ib3RQb3NpdGlvbix3YWxsUG9pbnQpICAgICAgXHJcbiAgICAgICAgICAgICAgIH0gYXMgUG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xyXG4gICAgICAgICAgICBpZiggcHJ2LmQgPCBjdXIuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZSggcm9ib3RQb3NpdGlvbjpQb3NpdGlvbixwb2ludDpQb2ludCl7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyhyb2JvdFBvc2l0aW9uLngtcG9pbnQueCwyKSArIE1hdGgucG93KHJvYm90UG9zaXRpb24ueS1wb2ludC55LDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2FsY0Rpc3RhbmNlcygpO1xyXG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZm9yRWFjaCggcG9pbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgIH0gKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb2ludCA6UG9pbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCBPYnN0YWNsZXMucldhbGwsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KFwiSGVsbG8gV29ybGRcIiwgMTAsIDUwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTcGVlZCB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgeyBTZW5zb3IsIFNvbmFyU2Vuc29ycyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xyXG4gICAgeDogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHhcclxuICAgIHk6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB5XHJcbiAgICB0aDogbnVtYmVyIC8vIHRoZXRhIG9yaWVudGF0aW9uIG9mIHJvYm90IGluIDIgRGltZW50aW9uXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUm9ib3Qge1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBzdGF0aWMgcm9ib3RBdHRyID0ge1xyXG4gICAgICAgIFdoZWVsUjogNSxcclxuICAgICAgICBySDogNTAsXHJcbiAgICAgICAgclc6IDMwLFxyXG4gICAgICAgIHJTTDogMjAsXHJcbiAgICAgICAgclNXOiAzXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBkdCA9IDAuMDE7XHJcblxyXG4gICAgcG9zaXRpb24gPSB7IHg6IDEzMCwgeTogMTQ1LCB0aDogTWF0aC5QSSAvIDIgfSBhcyBQb3NpdGlvbjtcclxuICAgIHNwZWVkID0geyByaWdodDogMTAwLCBsZWZ0OiAxMDAgfSBhcyBTcGVlZDtcclxuICAgIHNvbmFyU2Vuc29ycz1uZXcgU29uYXJTZW5zb3JzKCk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIC8vIHRoaXMucGxvdFJvYm90KDI2OCwgMjM0KTtcclxuICAgIH1cclxuXHJcbiAgICBwbG90Q2lyY2xlKHBvaXN0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaXN0aW9uLngsIHBvaXN0aW9uLnksIDE1LCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxvdFJvYm90Mihwb2lzdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvaXN0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBtb3ZlQW5kVHVybiA9IChkOiBudW1iZXIsIHRoOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeENvb3JkID0gcHJldmlvdXNQb3NpdGlvbi54ICsgZCAqIE1hdGguY29zKHRoICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueSArIGQgKiBNYXRoLnNpbih0aCAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBwcmV2aW91c1Bvc2l0aW9uID0geyB4OiB4Q29vcmQsIHk6IHlDb29yZCwgdGggfTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4Q29vcmQsIHlDb29yZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2lzdGlvbi54LCBwb2lzdGlvbi55ICArIDIpO1xyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIDkwICsgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMLCAtMTgwIC0gNDUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDkwIC0gNDUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC00NSsgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCA5MCsgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCAwKyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIC05MCsgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAwKyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIDQ1KyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC00NSsgcG9pc3Rpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgMTgwICsgNDUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJILCAtOTArIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTQ1KyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xMzUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC0yMjUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLCAxODArIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTkwIC0gNDUrIHBvaXN0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1KyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC0xODAgLSA5MCAtIDQ1KyBwb2lzdGlvbi50aCApO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5yb3RhdGUocG9pc3Rpb24udGgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BlZWQoKTogU3BlZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoc3BlZWQ6IFNwZWVkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG5cclxuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMua2luZW1hdGljKHNwZWVkLmxlZnQsIHNwZWVkLnJpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IGRlbHRhLmR4IDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gZGVsdGEuZHkgO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24udGggKz0gZGVsdGEuZHRoO1xyXG4gICAgICAgIC8vIHt4OnRoaXMuY2FudmFzLndpZHRoLzItIHRoaXMucm9ib3Qucm9ib3RBdHRyLnJILzIsXHJcbiAgICAgICAgLy8geTp0aGlzLmNhbnZhcy5oZWlnaHQvMiArIHRoaXMucm9ib3Qucm9ib3RBdHRyLnJXLzIsXHJcbiAgICAgICAgLy8gdGg6LTkwfVxyXG4gICAgICAgIC8vIHRoaXMucGxvdFJvYm90KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLnRoZXRhKTtcclxuICAgICAgICAvLyB0aGlzLnBsb3RDaXJjbGUoIHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMucGxvdFJvYm90Mih0aGlzLnBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAga2luZW1hdGljKGxlZnRXZWVsU3BlZWQ6IG51bWJlciwgcmlnaHRXaGVlbFNwZWVkOiBudW1iZXIpOiB7IGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIGR0aDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclZlbG9jaXR5ID0gKHJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpIC8gMjtcclxuICAgICAgICBjb25zdCBhbmd1bGFyVmVsb2NpdHkgPSByaWdodFdoZWVsU3BlZWQgLSBsZWZ0V2VlbFNwZWVkO1xyXG4gICAgICAgIGNvbnN0IGR0aCA9ICgyICogTWF0aC5QSSAqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIgLyBSb2JvdC5yb2JvdEF0dHIuclcpICogYW5ndWxhclZlbG9jaXR5ICogdGhpcy5kdDtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IHRoaXMucG9zaXRpb24udGggKyBkdGg7XHJcbiAgICAgICAgY29uc3QgZHggPSBSb2JvdC5yb2JvdEF0dHIuV2hlZWxSICogbGluZWFyVmVsb2NpdHkgKiBNYXRoLmNvcyh0aGV0YSkgKiB0aGlzLmR0O1xyXG4gICAgICAgIGNvbnN0IGR5ID0gUm9ib3Qucm9ib3RBdHRyLldoZWVsUiAqIGxpbmVhclZlbG9jaXR5ICogTWF0aC5zaW4odGhldGEpICogdGhpcy5kdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZHgsIGR5LCBkdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZW5zb3JzKCk6QXJyYXk8U2Vuc29yPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uYXJTZW5zb3JzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHRoaXMuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yIGV4dGVuZHMgUG9pbnQge1xyXG4gICAgc2lkZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb25hclNlbnNvcnMge1xyXG4gICAgY2FsY1NlbnNvcnNQb3NpdGlvbnMocm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOkFycmF5PFNlbnNvcj4ge1xyXG4gICAgICAgIHJldHVybiBbXCJmcm9udExlZnRcIiwgXCJmcm9udFJpZ2h0XCIsIFwiYmFja0xlZnRcIiwgXCJiYWNrUmlnaHRcIl1cclxuICAgICAgICAgICAgLm1hcChzZW5zb3JTaWRlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBcImJhY2tMZWZ0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBNYXRoLmNvcyhNYXRoLlBJIC8gNCkgKiBSb2JvdC5yb2JvdEF0dHIuclNMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgLSBNYXRoLmNvcyhNYXRoLlBJIC8gNCkgKiBSb2JvdC5yb2JvdEF0dHIuclNMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gXCJiYWNrUmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LnJvYm90QXR0ci5yVyArIE1hdGguY29zKE1hdGguUEkgLyA0KSAqIFJvYm90LnJvYm90QXR0ci5yU0wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIE1hdGguY29zKE1hdGguUEkgLyA0KSAqIFJvYm90LnJvYm90QXR0ci5yU0wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBcImZyb250TGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFwiZnJvbnRSaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgUm9ib3Qucm9ib3RBdHRyLnJXICsgTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55ICsgUm9ib3Qucm9ib3RBdHRyLnJIICsgTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVkIHtcclxuICAgIHJpZ2h0Om51bWJlcixcclxuICAgIGxlZnQ6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVlZENvbnRyb2xsZXIge1xyXG5cclxuICAgICBjYWxjV2hlZWxzU3BlZWQoIG9ic3RhY2xlRGlzdGFuY2VzOiBBcnJheTxQb2ludD4sY3VycmVudFNwZWVkOlNwZWVkICApIHtcclxuICAgICAgICBpZiggb2JzdGFjbGVEaXN0YW5jZXMuc29tZSggcG9pbnQgPT4gcG9pbnQuZCA8IDEwICkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIHJpZ2h0OiBjdXJyZW50U3BlZWQucmlnaHQgKiAoLTEpLFxyXG4gICAgICAgICAgICAgICBsZWZ0OiBjdXJyZW50U3BlZWQubGVmdCAqICgtMSksXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50U3BlZWQ7XHJcbiAgICAgfVxyXG5cclxufSIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgeyBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XHJcbmltcG9ydCB7IFNwZWVkQ29udHJvbGxlciB9IGZyb20gXCIuL1NwZWVkQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkIHtcclxuICByb2JvdCA9IG5ldyBSb2JvdCgpO1xyXG4gIG9ic3RhY2xlcyA9IG5ldyBPYnN0YWNsZXMoKTtcclxuICBjb25yb2xsZXIgPSBuZXcgU3BlZWRDb250cm9sbGVyKCk7XHJcblxyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgY29uc3Qgc2Vuc29yRGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHRoaXMucm9ib3QuZ2V0U2Vuc29ycygpKTtcclxuICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKGRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpKTtcclxuICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XHJcblxyXG4gICAvLyB0aGlzLnJvYm90LnBsb3RSb2JvdDIoe3g6dGhpcy5jYW52YXMud2lkdGgvMi0gdGhpcy5yb2JvdC5yb2JvdEF0dHIuckgvMix5OnRoaXMuY2FudmFzLmhlaWdodC8yICsgdGhpcy5yb2JvdC5yb2JvdEF0dHIuclcvMix0aDotOTB9KTtcclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5hbmltYXRlKCkgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG59IiwiXHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcbndvcmxkLmFuaW1hdGUoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==