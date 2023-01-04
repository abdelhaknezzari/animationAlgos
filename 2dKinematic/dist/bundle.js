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
/*! exports provided: Obstacles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Obstacles", function() { return Obstacles; });
var Obstacles = /** @class */ (function () {
    function Obstacles() {
        this.canvas = document.getElementById('canvas');
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
        var sensDist = sensors.map(function (sensor) {
            var _a;
            return {
                d: (_a = wallsPoints.map(function (wallPoint) {
                    return {
                        x: wallPoint.x,
                        y: wallPoint.y,
                        d: _this.distanceBetweenRobotAndObstacle({ x: sensor.x, y: sensor.y, th: null }, wallPoint)
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
        return sensDist;
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
    Obstacles.rWall = 0.5;
    return Obstacles;
}());

/* harmony default export */ __webpack_exports__["default"] = (new Obstacles());


/***/ }),

/***/ "./src/PathGenerator.ts":
/*!******************************!*\
  !*** ./src/PathGenerator.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");


var PathGenerator = /** @class */ (function () {
    function PathGenerator() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    PathGenerator.prototype.showFrontObstaclePathAvoidance = function (sensors, robotPosition) {
        var frontLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontLeft; }).d;
        var frontRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontRight; }).d;
        var backLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backLeft; }).d;
        var backRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backRight; }).d;
        debugger;
        if (frontLeftDist <= 50 &&
            frontRightDist <= 50) {
            this.context.beginPath();
            if (robotPosition.th === 0 || robotPosition.th === Math.PI) {
                var currentColor = this.context.fillStyle;
                var arcX = robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH;
                var arcY = robotPosition.y;
                this.context.fillStyle = "blue";
                this.context.arc(arcX, arcY, _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW, Math.PI, Math.PI / 2);
                this.context.stroke();
                this.context.fillStyle = currentColor;
            }
        }
    };
    return PathGenerator;
}());
/* harmony default export */ __webpack_exports__["default"] = (new PathGenerator());


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
        this.position = { x: 150, y: 150, th: 0 };
        this.speed = { right: 100, left: 100 };
        this.sonarSensors = new _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["SonarSensors"]();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    Robot.prototype.plotCircle = function (position) {
        this.context.beginPath();
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(position.x, position.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    };
    Robot.prototype.plotRobot = function (position) {
        var _this = this;
        var previousPosition = position;
        var moveAndTurn = function (d, th) {
            var xCoord = previousPosition.x + d * Math.cos(th);
            var yCoord = previousPosition.y + d * Math.sin(th);
            previousPosition = { x: xCoord, y: yCoord, th: th };
            _this.context.lineTo(xCoord, yCoord);
        };
        var sensHolder = function (angle) {
            moveAndTurn(Robot.robotAttr.rSL, position.th - Math.PI / 4 + angle);
            moveAndTurn(Robot.robotAttr.rSW, position.th + Math.PI / 4 + angle);
            moveAndTurn(Robot.robotAttr.rSL, position.th + 3 * Math.PI / 4 + angle);
        };
        this.context.moveTo(previousPosition.x, previousPosition.y);
        moveAndTurn(Robot.robotAttr.rW / 2 - 2, position.th + Math.PI / 2);
        sensHolder(Math.PI / 2);
        moveAndTurn(Robot.robotAttr.rH, position.th + Math.PI);
        sensHolder(Math.PI);
        moveAndTurn(Robot.robotAttr.rW, position.th - Math.PI / 2);
        sensHolder(-Math.PI / 2);
        moveAndTurn(Robot.robotAttr.rH, position.th);
        sensHolder(0);
        moveAndTurn(Robot.robotAttr.rW / 2, position.th + Math.PI / 2);
        moveAndTurn(2, position.th);
        moveAndTurn(2, position.th + Math.PI / 2);
        moveAndTurn(2, position.th + Math.PI);
        this.context.stroke();
        this.context.fill();
    };
    Robot.prototype.plotRobot2 = function (position) {
        var _this = this;
        var previousPosition = position;
        var moveAndTurn = function (d, th) {
            var xCoord = previousPosition.x + d * Math.cos(th * Math.PI / 180);
            var yCoord = previousPosition.y + d * Math.sin(th * Math.PI / 180);
            previousPosition = { x: xCoord, y: yCoord, th: th };
            _this.context.lineTo(xCoord, yCoord);
        };
        this.context.moveTo(previousPosition.x, previousPosition.y);
        moveAndTurn(Robot.robotAttr.rH, 90 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -45 + position.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, position.th);
        moveAndTurn(4, 90 + position.th);
        moveAndTurn(4, 0 + position.th);
        moveAndTurn(4, -90 + position.th);
        moveAndTurn((Robot.robotAttr.rW - 4) / 2, 0 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, 22 + position.th);
        moveAndTurn(Robot.robotAttr.rH, -90 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -135 + position.th);
        moveAndTurn(Robot.robotAttr.rSL - 2, -225 + position.th);
        moveAndTurn(Robot.robotAttr.rW, 180 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -90 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSW, -180 - 45 + position.th);
        moveAndTurn(Robot.robotAttr.rSL, -180 - 90 - 45 + position.th);
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
        this.calcNewPosition(speed);
        this.plotRobot(this.position);
        this.sonarSensors.show(this.position);
    };
    Robot.prototype.calcNewPosition = function (speed) {
        var delta = this.kinematic(speed.left, speed.right);
        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.th += delta.dth;
    };
    Robot.prototype.kinematic = function (leftWeelSpeed, rightWheelSpeed) {
        var linearVelocity = (rightWheelSpeed + leftWeelSpeed) / 2;
        var angularVelocity = leftWeelSpeed - rightWheelSpeed;
        var dth = angularVelocity * this.dt * 2 * Math.PI * Robot.robotAttr.WheelR / Robot.robotAttr.rW;
        // const theta = this.position.th + dth;
        var dx = linearVelocity * Math.cos(this.position.th) * this.dt * Robot.robotAttr.WheelR / 2;
        var dy = linearVelocity * Math.sin(this.position.th) * this.dt * Robot.robotAttr.WheelR / 2;
        return { dx: dx, dy: dy, dth: dth };
    };
    Robot.prototype.getSensors = function () {
        return this.sonarSensors.calcSensorsPositions(this.getPosition());
    };
    Robot.robotAttr = {
        WheelR: 5,
        rH: 60,
        rW: 30,
        rSL: 20,
        rSW: 3
    };
    Robot.RSLCos45 = Math.cos(Math.PI / 4) * Robot.robotAttr.rSL;
    return Robot;
}());



/***/ }),

/***/ "./src/SonarSensors.ts":
/*!*****************************!*\
  !*** ./src/SonarSensors.ts ***!
  \*****************************/
/*! exports provided: Sides, SonarSensors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sides", function() { return Sides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonarSensors", function() { return SonarSensors; });
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");

var Sides;
(function (Sides) {
    Sides["frontLeft"] = "frontLeft";
    Sides["frontRight"] = "frontRight";
    Sides["backLeft"] = "backLeft";
    Sides["backRight"] = "backRight";
    Sides["middle"] = "middle";
    Sides["center"] = "center";
})(Sides || (Sides = {}));
var SonarSensors = /** @class */ (function () {
    function SonarSensors() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    SonarSensors.prototype.calDist = function (point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    };
    SonarSensors.prototype.calAngle = function (point1, point2) {
        return Math.atan((point2.y - point1.y) / (point2.x - point1.x));
    };
    SonarSensors.prototype.calcSensorsPositions = function (robotPosition) {
        var _this = this;
        return [Sides.frontLeft, Sides.frontRight, Sides.backLeft, Sides.backRight, Sides.middle, Sides.center]
            .map(function (sensorSide) {
            if (sensorSide === Sides.center) {
                return {
                    x: robotPosition.x,
                    y: robotPosition.y,
                    side: sensorSide,
                };
            }
            if (sensorSide === Sides.middle) {
                return {
                    x: robotPosition.x,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH / 2,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 3,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backRight) {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + 1,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.frontLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 4,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.frontRight) {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 2,
                    y: robotPosition.y + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + 3,
                    side: sensorSide
                };
            }
            return undefined;
        }).map(function (sens) {
            var sensCalc = sens;
            sensCalc.dc = _this.calDist(robotPosition, sensCalc);
            var angle = _this.calAngle(robotPosition, sensCalc) +
                (sens.side === Sides.frontLeft || sens.side === Sides.backLeft ? Math.PI : 0) +
                robotPosition.th + Math.PI / 2;
            sensCalc.x = robotPosition.x + sensCalc.dc * Math.cos(angle);
            sensCalc.y = robotPosition.y + sensCalc.dc * Math.sin(angle);
            return sensCalc;
        });
    };
    SonarSensors.prototype.show = function (robotPosition) {
        var _this = this;
        var currentColor = this.context.fillStyle;
        var sensors = this.calcSensorsPositions(robotPosition);
        sensors.forEach(function (sensor) {
            _this.plotCircle({ x: sensor.x, y: sensor.y, th: robotPosition.th });
        });
    };
    SonarSensors.prototype.plotCircle = function (poistion) {
        this.context.beginPath();
        // this.context.rotate(poistion.th*Math.PI/180);
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "orange";
        this.context.arc(poistion.x, poistion.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
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
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");

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
    SpeedController.prototype.calcWheelsSpeed2 = function (sensorObstDistances, currentSpeed) {
        var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
        var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
        var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
        var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
        var calcSpeed = { left: SpeedController.MaxSpeed, right: SpeedController.MaxSpeed };
        var coef = (1 - Math.exp(-0.04 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
            Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
        var speedMax = SpeedController.MaxSpeed * (1 - Math.exp(-0.8 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(frontRightDist - SpeedController.MaxDistance, 2) +
            Math.pow(backLeftDist - SpeedController.MaxDistance, 2) +
            Math.pow(backRightDist - SpeedController.MaxDistance, 2)) / SpeedController.MaxDistance));
        var angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
        var frontRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var frontLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var backRightTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        var backLeftTurn = 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance));
        //     R  L
        // F   4  8    => 12
        // B   1  2    => 3
        //    ||  ||
        //    5   10
        var alpha = angleCode > 0 ? (frontRightTurn + backRightTurn) * 0.5 : 1;
        var beta = angleCode > 0 ? (frontLeftTurn + backLeftTurn) * 0.5 : 1;
        // switch (angleCode) {
        //     case (3):
        //         alpha = 0.02;
        //         break;
        //     case (2):
        //         alpha = 0.02;
        //         break;
        //     case (1):
        //         alpha = 0.02;
        //         break;
        //     case (4):
        //         alpha = 0.02;
        //         break;
        //     case (5):
        //         alpha = 0.02;
        //         break;
        //     case (8):
        //         alpha = 0.02;
        //     case (10):
        //         alpha = 0.02;
        //         break;
        //         break;
        //     default:
        //         alpha = 0.00;
        //         break;
        // }
        calcSpeed.left = SpeedController.MaxSpeed * alpha;
        calcSpeed.right = SpeedController.MaxSpeed * beta;
        return calcSpeed;
    };
    SpeedController.MaxSpeed = 500;
    SpeedController.MaxDistance = 30;
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
/* harmony import */ var _PathGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathGenerator */ "./src/PathGenerator.ts");
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");




var World = /** @class */ (function () {
    function World() {
        this.robot = new _Robot__WEBPACK_IMPORTED_MODULE_2__["Robot"]();
        this.obstacles = new _Obstacles__WEBPACK_IMPORTED_MODULE_0__["Obstacles"]();
        this.conroller = new _SpeedController__WEBPACK_IMPORTED_MODULE_3__["SpeedController"]();
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    World.prototype.animate = function () {
        var _this = this;
        this.clear();
        var distances = this.obstacles.calcDistances(this.robot.getPosition());
        var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
        var speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
        this.robot.animate(speed);
        this.obstacles.show();
        debugger;
        _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
        window.requestAnimationFrame(function () { _this.animate(); });
    };
    World.prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    World.prototype.handleEvent = function (event) {
        this.clear();
        switch (event.currentTarget.getAttribute("id")) {
            case "right": {
                this.robot.animate({ right: 160, left: 50 });
                break;
            }
            case "left": {
                this.robot.animate({ right: 50, left: 160 });
                break;
            }
            case "forward": {
                this.robot.animate({ right: 160, left: 160 });
                break;
            }
            case "backward": {
                this.robot.animate({ right: -160, left: -160 });
                break;
            }
            case "step": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
                this.robot.animate(speed);
                this.obstacles.show();
                break;
            }
        }
        this.obstacles.show();
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
document.getElementById("right").addEventListener("click", function (event) {
    world.handleEvent(event);
});
document.getElementById("left").addEventListener("click", function (event) {
    world.handleEvent(event);
});
document.getElementById("forward").addEventListener("click", function (event) {
    world.handleEvent(event);
});
document.getElementById("backward").addEventListener("click", function (event) {
    world.handleEvent(event);
});
document.getElementById("step").addEventListener("click", function (event) {
    world.handleEvent(event);
});
document.getElementById("x").addEventListener("change", function (event) {
    debugger;
});
document.getElementById("y").addEventListener("change", function (event) {
    debugger;
});
document.getElementById("th").addEventListener("change", function (event) {
    debugger;
});
world.animate();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Xb3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7SUFRSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FB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Q0FBQyxFQUFFLENBQUUsQ0FBQztRQUMzRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN4RCxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNqQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDdkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNuRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFH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LENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRSxlQUFlLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQztRQUMvSSxJQUFNLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDO1FBQzdJLElBQU0sYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUM7UUFDN0ksSUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENB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QUFFLE9BQU8sRUFBRSxlQUFLO0lBQy9ELEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBcUIsQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsZUFBSztJQUNoRSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQXFCLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLGVBQUs7SUFDNUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFxQixDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFFLFFBQVEsRUFBRSxlQUFLO0lBQzFELFFBQVEsQ0FBQztBQUViLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRSxRQUFRLEVBQUUsZUFBSztJQUMxRCxRQUFRLENBQUM7QUFFYixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUUsUUFBUSxFQUFFLGVBQUs7SUFDM0QsUUFBUSxDQUFDO0FBRWIsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XHJcbmltcG9ydCB7IFNlbnNvciwgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRNaW5pbXVtIHtcclxuICAgIHg6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB4XHJcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IGV4dGVuZHMgUG9pbnRNaW5pbXVtIHtcclxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3RcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3JEaXN0YW5jZSB7XHJcbiAgICBzaWRlOiBTaWRlcyxcclxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3RcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9ic3RhY2xlcyB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcblxyXG4gICAgd2FsbHM6IEFycmF5PEFycmF5PFBvaW50Pj47XHJcbiAgICBvYnN0YWNsZXM6IEFycmF5PFBvaW50PjtcclxuICAgIHN0YXRpYyByV2FsbCA9IDAuNTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlT2JzdGFjbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVPYnN0YWNsZXMoKSB7XHJcbiAgICAgICAgdGhpcy53YWxscyA9IFtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IDAsIHk6IG51bX07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCwgeTogbnVtIH07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodH07IH0pIGFzIFtQb2ludF0sXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IDB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjcgIH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuMyB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjcgIH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLndpZHRoIC0gbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43IH07IH0pIGFzIFtQb2ludF1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgICBjYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnMoc2Vuc29yczpTZW5zb3JbXSk6U2Vuc29yRGlzdGFuY2VbXSB7XHJcbiAgICAgICAgY29uc3Qgd2FsbHNQb2ludHMgPSB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApO1xyXG4gICAgICAgIGNvbnN0IHNlbnNEaXN0ID0gc2Vuc29ycy5tYXAoXHJcbiAgICAgICAgICAgIHNlbnNvciA9PiBcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkOndhbGxzUG9pbnRzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMuZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZSh7eDpzZW5zb3IueCx5OnNlbnNvci55LHRoOm51bGwgfSx3YWxsUG9pbnQpICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pWzBdPy5kLFxyXG4gICAgICAgICAgICAgICAgc2lkZTpzZW5zb3Iuc2lkZVxyXG4gICAgICAgICAgICAgfSBhcyBTZW5zb3JEaXN0YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHNlbnNEaXN0O1xyXG4gICAgIH1cclxuXHJcbiAgICBjYWxjRGlzdGFuY2VzKCByb2JvdFBvc2l0aW9uOlBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHMucmVkdWNlKCAocHJ2LGN1cikgPT4gcHJ2LmNvbmNhdChjdXIpLFtdICkubWFwKFxyXG4gICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeDp3YWxsUG9pbnQueCxcclxuICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXHJcbiAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUocm9ib3RQb3NpdGlvbix3YWxsUG9pbnQpICAgICAgXHJcbiAgICAgICAgICAgICAgIH0gYXMgUG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLnNvcnQoIChwcnYsY3VyKSA9PiAge1xyXG4gICAgICAgICAgICBpZiggcHJ2LmQgPCBjdXIuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIHBydi5kID4gY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZSggcm9ib3RQb3NpdGlvbjpQb3NpdGlvbixwb2ludDpQb2ludCl7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCBNYXRoLnBvdyhyb2JvdFBvc2l0aW9uLngtcG9pbnQueCwyKSArIE1hdGgucG93KHJvYm90UG9zaXRpb24ueS1wb2ludC55LDIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2FsY0Rpc3RhbmNlcygpO1xyXG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZm9yRWFjaCggcG9pbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUocG9pbnQpO1xyXG4gICAgICAgIH0gKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb2ludCA6UG9pbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCBPYnN0YWNsZXMucldhbGwsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KFwiSGVsbG8gV29ybGRcIiwgMTAsIDUwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnN0YWNsZXMoKTsiLCJpbXBvcnQgeyBTZW5zb3JEaXN0YW5jZSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiwgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5jbGFzcyBQYXRoR2VuZXJhdG9yIHtcclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Zyb250T2JzdGFjbGVQYXRoQXZvaWRhbmNlKHNlbnNvcnM6IFNlbnNvckRpc3RhbmNlW10sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xyXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHREaXN0ID0gc2Vuc29ycy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KS5kO1xyXG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xyXG5cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBpZiAoZnJvbnRMZWZ0RGlzdCA8PSA1MCAmJlxyXG4gICAgICAgICAgIGZyb250UmlnaHREaXN0IDw9IDUwICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChyb2JvdFBvc2l0aW9uLnRoID09PSAwIHx8IHJvYm90UG9zaXRpb24udGggPT09IE1hdGguUEkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmNYID0gcm9ib3RQb3NpdGlvbi54ICsgUm9ib3Qucm9ib3RBdHRyLnJIO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJjWSA9IHJvYm90UG9zaXRpb24ueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5hcmMoYXJjWCwgYXJjWSwgUm9ib3Qucm9ib3RBdHRyLnJXICwgTWF0aC5QSSwgIE1hdGguUEkvMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gIGN1cnJlbnRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXRoR2VuZXJhdG9yKCk7XHJcbiIsImltcG9ydCB7IFNwZWVkIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFNlbnNvciwgU29uYXJTZW5zb3JzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XHJcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxyXG4gICAgeTogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHlcclxuICAgIHRoOiBudW1iZXIgLy8gdGhldGEgb3JpZW50YXRpb24gb2Ygcm9ib3QgaW4gMiBEaW1lbnRpb25cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb2JvdCB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHN0YXRpYyByb2JvdEF0dHIgPSB7XHJcbiAgICAgICAgV2hlZWxSOiA1LFxyXG4gICAgICAgIHJIOiA2MCxcclxuICAgICAgICByVzogMzAsXHJcbiAgICAgICAgclNMOiAyMCxcclxuICAgICAgICByU1c6IDNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIFJTTENvczQ1ID0gTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTDtcclxuXHJcbiAgICBkdCA9IDAuMDE7XHJcblxyXG4gICAgcG9zaXRpb24gPSB7IHg6IDE1MCwgeTogMTUwLCB0aDowIH0gYXMgUG9zaXRpb247XHJcbiAgICBzcGVlZCA9IHsgcmlnaHQ6IDEwMCwgbGVmdDogMTAwIH0gYXMgU3BlZWQ7XHJcbiAgICBzb25hclNlbnNvcnM9bmV3IFNvbmFyU2Vuc29ycygpO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHBsb3RSb2JvdChwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IG1vdmVBbmRUdXJuID0gKGQ6IG51bWJlciwgdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnggKyBkICogTWF0aC5jb3ModGggKTtcclxuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcHJldmlvdXNQb3NpdGlvbi55ICsgZCAqIE1hdGguc2luKHRoKTtcclxuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbnNIb2xkZXIgPSAoYW5nbGU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCAtTWF0aC5QSS80K2FuZ2xlKTtcclxuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgcG9zaXRpb24udGgrTWF0aC5QSS80ICthbmdsZSk7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCArMypNYXRoLlBJLzQrYW5nbGUpO1xyXG4gICAgICAgIH07IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocHJldmlvdXNQb3NpdGlvbi54ICwgcHJldmlvdXNQb3NpdGlvbi55ICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLzIgLTIgLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoIE1hdGguUEkvMiApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSSApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoTWF0aC5QSSApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVyAsIHBvc2l0aW9uLnRoIC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBzZW5zSG9sZGVyKC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoMCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVy8yICwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcclxuXHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgIHBvc2l0aW9uLnRoICApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDIsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgcG9zaXRpb24udGgrIE1hdGguUEkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbG90Um9ib3QyKHBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBwcmV2aW91c1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgbW92ZUFuZFR1cm4gPSAoZDogbnVtYmVyLCB0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueCArIGQgKiBNYXRoLmNvcyh0aCAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnkgKyBkICogTWF0aC5zaW4odGggKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwcmV2aW91c1Bvc2l0aW9uLnggLCBwcmV2aW91c1Bvc2l0aW9uLnkgKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCA5MCArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xODAgLSA0NSArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC00NSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCA5MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCAwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIC05MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC00NSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgMjIrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJILCAtOTArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xMzUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC0yMjUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLCAxODArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTkwIC0gNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC0xODAgLSA5MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BlZWQoKTogU3BlZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoc3BlZWQ6IFNwZWVkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuY2FsY05ld1Bvc2l0aW9uKHNwZWVkKTtcclxuICAgICAgICB0aGlzLnBsb3RSb2JvdCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnNvbmFyU2Vuc29ycy5zaG93KHRoaXMucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNOZXdQb3NpdGlvbihzcGVlZDogU3BlZWQpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMua2luZW1hdGljKHNwZWVkLmxlZnQsIHNwZWVkLnJpZ2h0KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZGVsdGEuZHg7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGRlbHRhLmR5O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24udGggKz0gZGVsdGEuZHRoIDtcclxuICAgIH1cclxuXHJcbiAgICBraW5lbWF0aWMobGVmdFdlZWxTcGVlZDogbnVtYmVyLCByaWdodFdoZWVsU3BlZWQ6IG51bWJlcik6IHsgZHg6IG51bWJlciwgZHk6IG51bWJlciwgZHRoOiBudW1iZXIgfSB7XHJcbiAgICAgICAgY29uc3QgbGluZWFyVmVsb2NpdHkgPSAocmlnaHRXaGVlbFNwZWVkICsgbGVmdFdlZWxTcGVlZCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IGFuZ3VsYXJWZWxvY2l0eSA9IGxlZnRXZWVsU3BlZWQtcmlnaHRXaGVlbFNwZWVkO1xyXG4gICAgICAgIGNvbnN0IGR0aCA9YW5ndWxhclZlbG9jaXR5ICogdGhpcy5kdCAqMiogTWF0aC5QSSogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8gUm9ib3Qucm9ib3RBdHRyLnJXO1xyXG4gICAgICAgIC8vIGNvbnN0IHRoZXRhID0gdGhpcy5wb3NpdGlvbi50aCArIGR0aDtcclxuICAgICAgICBjb25zdCBkeCA9bGluZWFyVmVsb2NpdHkgKiBNYXRoLmNvcyh0aGlzLnBvc2l0aW9uLnRoKSAqIHRoaXMuZHQgKiBSb2JvdC5yb2JvdEF0dHIuV2hlZWxSLzI7XHJcbiAgICAgICAgY29uc3QgZHkgPWxpbmVhclZlbG9jaXR5ICogTWF0aC5zaW4odGhpcy5wb3NpdGlvbi50aCkgKiB0aGlzLmR0ICogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8yO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkeCwgZHksIGR0aCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbnNvcnMoKTpBcnJheTxTZW5zb3I+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb25hclNlbnNvcnMuY2FsY1NlbnNvcnNQb3NpdGlvbnModGhpcy5nZXRQb3NpdGlvbigpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQb2ludCwgUG9pbnRNaW5pbXVtIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbnNvciBleHRlbmRzIFBvaW50IHtcclxuICAgIHNpZGU6IHN0cmluZyxcclxuICAgIGRjOiBudW1iZXIgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXJcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZW51bSBTaWRlcyB7XHJcbiAgICBmcm9udExlZnQgPSBcImZyb250TGVmdFwiLFxyXG4gICAgZnJvbnRSaWdodCA9IFwiZnJvbnRSaWdodFwiLFxyXG4gICAgYmFja0xlZnQgPSBcImJhY2tMZWZ0XCIsXHJcbiAgICBiYWNrUmlnaHQgPSBcImJhY2tSaWdodFwiLFxyXG4gICAgbWlkZGxlID0gXCJtaWRkbGVcIixcclxuICAgIGNlbnRlciA9IFwiY2VudGVyXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvbmFyU2Vuc29ycyB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsRGlzdChwb2ludDE6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgcG9pbnQyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50MS54IC0gcG9pbnQyLngsIDIpICsgTWF0aC5wb3cocG9pbnQxLnkgLSBwb2ludDIueSwgMikpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbEFuZ2xlKHBvaW50MTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBwb2ludDI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4oKHBvaW50Mi55IC0gcG9pbnQxLnkpLyhwb2ludDIueCAtIHBvaW50MS54KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY1NlbnNvcnNQb3NpdGlvbnMocm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBBcnJheTxTZW5zb3I+IHtcclxuICAgICAgICByZXR1cm4gW1NpZGVzLmZyb250TGVmdCwgU2lkZXMuZnJvbnRSaWdodCwgU2lkZXMuYmFja0xlZnQsIFNpZGVzLmJhY2tSaWdodCwgU2lkZXMubWlkZGxlLCBTaWRlcy5jZW50ZXJdXHJcbiAgICAgICAgICAgIC5tYXAoc2Vuc29yU2lkZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuY2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMubWlkZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgKyBSb2JvdC5yb2JvdEF0dHIuckggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBSb2JvdC5SU0xDb3M0NSAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgLSBSb2JvdC5SU0xDb3M0NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCArIFJvYm90LlJTTENvczQ1ICsgUm9ib3Qucm9ib3RBdHRyLnJXIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuckggKyBSb2JvdC5yb2JvdEF0dHIuclcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuclcgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuckggKyAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkubWFwKHNlbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vuc0NhbGMgPSBzZW5zO1xyXG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMuZGMgPSB0aGlzLmNhbERpc3Qocm9ib3RQb3NpdGlvbiwgc2Vuc0NhbGMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmNhbEFuZ2xlKHJvYm90UG9zaXRpb24sIHNlbnNDYWxjKSArXHJcbiAgICAgICAgICAgICAgICAoc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQgfHwgc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCA/IE1hdGguUEkgOiAwKSArXHJcbiAgICAgICAgICAgICAgICByb2JvdFBvc2l0aW9uLnRoICArIE1hdGguUEkvMiA7XHJcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy54ID0gcm9ib3RQb3NpdGlvbi54ICsgc2Vuc0NhbGMuZGMgKiBNYXRoLmNvcyhhbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgc2Vuc0NhbGMueSA9IHJvYm90UG9zaXRpb24ueSArIHNlbnNDYWxjLmRjICogTWF0aC5zaW4oYW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5zQ2FsYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3cocm9ib3RQb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xyXG4gICAgICAgIGNvbnN0IHNlbnNvcnMgPSB0aGlzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHJvYm90UG9zaXRpb24pO1xyXG5cclxuICAgICAgICBzZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHsgeDogc2Vuc29yLngsIHk6IHNlbnNvci55LCB0aDogcm9ib3RQb3NpdGlvbi50aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxvdENpcmNsZShwb2lzdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnJvdGF0ZShwb2lzdGlvbi50aCpNYXRoLlBJLzE4MCk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaXN0aW9uLngsIHBvaXN0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUG9pbnQsIFNlbnNvckRpc3RhbmNlIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU2Vuc29yLCBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGVlZCB7XHJcbiAgICByaWdodDogbnVtYmVyLFxyXG4gICAgbGVmdDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVlZENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIE1heFNwZWVkID0gNTAwO1xyXG4gICAgc3RhdGljIE1heERpc3RhbmNlID0gMzA7XHJcbiAgICBjYWxjV2hlZWxzU3BlZWQob2JzdGFjbGVEaXN0YW5jZXM6IEFycmF5PFBvaW50PiwgY3VycmVudFNwZWVkOiBTcGVlZCk6IFNwZWVkIHtcclxuICAgICAgICBpZiAob2JzdGFjbGVEaXN0YW5jZXMuc29tZShwb2ludCA9PiBwb2ludC5kIDwgMTApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogY3VycmVudFNwZWVkLnJpZ2h0ICogKC0xKSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGN1cnJlbnRTcGVlZC5sZWZ0ICogKC0xKSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTcGVlZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY1doZWVsc1NwZWVkMihzZW5zb3JPYnN0RGlzdGFuY2VzOiBTZW5zb3JEaXN0YW5jZVtdLCBjdXJyZW50U3BlZWQ6IFNwZWVkKTogU3BlZWQge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KS5kO1xyXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udFJpZ2h0KS5kO1xyXG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KS5kO1xyXG5cclxuICAgICAgICBsZXQgY2FsY1NwZWVkOiBTcGVlZCA9IHsgbGVmdDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkLCByaWdodDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkIH07XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjb2VmID0gKDEgLSBNYXRoLmV4cCgtMC4wNCAqIE1hdGguc3FydChNYXRoLnBvdyhmcm9udExlZnREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSArXHJcbiAgICAgICAgTWF0aC5wb3coZnJvbnRSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcclxuICAgICAgICBNYXRoLnBvdyhiYWNrTGVmdERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcclxuICAgICAgICBNYXRoLnBvdyhiYWNrUmlnaHREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSkgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BlZWRNYXggPSBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgKiAoMSAtIE1hdGguZXhwKC0wLjggKiBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbnRMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyhmcm9udFJpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyhiYWNrTGVmdERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coYmFja1JpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuZ2xlQ29kZSA9ICgoZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAzKSB8XHJcbiAgICAgICAgICAgICgoZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMikgfFxyXG4gICAgICAgICAgICAoKGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAxKSB8XHJcbiAgICAgICAgICAgICgoYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHRUdXJuID0gMSAtIE1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coZnJvbnRSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgKSk7XHJcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0VHVybiA9IDEgLSBNYXRoLmV4cCgwLjAxKk1hdGguc3FydCggIE1hdGgucG93KGZyb250TGVmdERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgKSk7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0VHVybiA9IDEgLSBNYXRoLmV4cCgwLjAxKk1hdGguc3FydCggIE1hdGgucG93KGJhY2tSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgKSk7XHJcbiAgICAgICAgY29uc3QgYmFja0xlZnRUdXJuID0gMSAtIE1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coYmFja0xlZnREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKS8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICkpO1xyXG4gICBcclxuICAgICAgICAvLyAgICAgUiAgTFxyXG4gICAgICAgIC8vIEYgICA0ICA4ICAgID0+IDEyXHJcbiAgICAgICAgLy8gQiAgIDEgIDIgICAgPT4gM1xyXG4gICAgICAgIC8vICAgIHx8ICB8fFxyXG4gICAgICAgIC8vICAgIDUgICAxMFxyXG4gICAgICAgIGxldCBhbHBoYSA9IGFuZ2xlQ29kZSA+IDAgPyAoZnJvbnRSaWdodFR1cm4gKyBiYWNrUmlnaHRUdXJuICkgKjAuNToxO1xyXG4gICAgICAgIGxldCBiZXRhID0gYW5nbGVDb2RlID4gMCA/IChmcm9udExlZnRUdXJuICsgYmFja0xlZnRUdXJuICkgKjAuNToxO1xyXG5cclxuICAgICAgICAvLyBzd2l0Y2ggKGFuZ2xlQ29kZSkge1xyXG4gICAgICAgIC8vICAgICBjYXNlICgzKTpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyAgICAgY2FzZSAoMik6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSAoMSk6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSAoNCk6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSAoNSk6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gICAgIGNhc2UgKDgpOlxyXG4gICAgICAgIC8vICAgICAgICAgYWxwaGEgPSAwLjAyO1xyXG5cclxuICAgICAgICAvLyAgICAgY2FzZSAoMTApOlxyXG4gICAgICAgIC8vICAgICAgICAgYWxwaGEgPSAwLjAyO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY2FsY1NwZWVkLmxlZnQgPSBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgICogIGFscGhhO1xyXG4gICAgICAgIGNhbGNTcGVlZC5yaWdodCA9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqIGJldGEgO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FsY1NwZWVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT2JzdGFjbGVzIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCBQYXRoR2VuZXJhdG9yIGZyb20gXCIuL1BhdGhHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyBTcGVlZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgcm9ib3QgPSBuZXcgUm9ib3QoKTtcclxuICBvYnN0YWNsZXMgPSBuZXcgT2JzdGFjbGVzKCk7XHJcbiAgY29ucm9sbGVyID0gbmV3IFNwZWVkQ29udHJvbGxlcigpO1xyXG5cclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUoKSB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlcyh0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgY29uc3Qgc2Vuc29yRGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHRoaXMucm9ib3QuZ2V0U2Vuc29ycygpKTtcclxuXHJcbiAgICBjb25zdCBzcGVlZCA9IHRoaXMuY29ucm9sbGVyLmNhbGNXaGVlbHNTcGVlZDIoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCkpO1xyXG4gICAgdGhpcy5yb2JvdC5hbmltYXRlKHNwZWVkKTtcclxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgUGF0aEdlbmVyYXRvci5zaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yRGlzdGFuY2VzLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5hbmltYXRlKCkgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFdmVudChldmVudDpQb2ludGVyRXZlbnQpOnZvaWQge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgc3dpdGNoKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XHJcbiAgICBjYXNlIFwicmlnaHRcIjoge1xyXG4gICAgICB0aGlzLnJvYm90LmFuaW1hdGUoe3JpZ2h0OjE2MCxsZWZ0OjUwfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcImxlZnRcIjoge1xyXG4gICAgICB0aGlzLnJvYm90LmFuaW1hdGUoe3JpZ2h0OjUwLGxlZnQ6MTYwfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgXCJmb3J3YXJkXCI6IHtcclxuICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHtyaWdodDoxNjAsbGVmdDoxNjB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBcImJhY2t3YXJkXCI6IHtcclxuICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHtyaWdodDotMTYwLGxlZnQ6LTE2MH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwic3RlcFwiOiB7XHJcbiAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XHJcbiAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkMihzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0U3BlZWQoKSk7XHJcbiAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XHJcbiAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICB9XHJcblxyXG5cclxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuXHJcbiAgfVxyXG59IiwiXHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vV29ybGRcIjtcclxuXHJcbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIikuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xyXG5cclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xyXG5cclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRcIikuYWRkRXZlbnRMaXN0ZW5lciggXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xyXG5cclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrd2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XHJcblxyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcFwiKS5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XHJcblxyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieFwiKS5hZGRFdmVudExpc3RlbmVyKCBcImNoYW5nZVwiLCBldmVudCA9PiB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5XCIpLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuICAgIGRlYnVnZ2VyO1xyXG5cclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoXCIpLmFkZEV2ZW50TGlzdGVuZXIoIFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuICAgIGRlYnVnZ2VyO1xyXG5cclxufSk7XHJcblxyXG53b3JsZC5hbmltYXRlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=