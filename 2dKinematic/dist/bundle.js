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
    PathGenerator.prototype.getRangeOfAngles = function (from, to, step) {
        return Array.from({ length: Math.ceil(Math.abs((to - from) / step)) }, function (x, i) { return i; }).map(function (indx) { return step > 0 ? from + indx * step : to + indx * step; });
    };
    PathGenerator.prototype.showFrontObstaclePathAvoidance = function (sensors, robotPosition) {
        var _this = this;
        var frontLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontLeft; }).d;
        var frontRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontRight; }).d;
        var backLeftDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backLeft; }).d;
        var backRightDist = sensors.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backRight; }).d;
        if (backLeftDist <= 3 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW &&
            backRightDist <= 3 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW) {
            this.context.beginPath();
            if (robotPosition.th >= -Math.PI * 15 / 180 && robotPosition.th <= Math.PI * 15 / 180) {
                var currentColor = this.context.fillStyle;
                var arcX_1 = robotPosition.x;
                var arcY_1 = robotPosition.y + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW;
                this.getRangeOfAngles(Math.PI / 2, 0, -0.02).forEach(function (angle) {
                    _this.plotCircle({
                        x: arcX_1 + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * Math.cos(angle),
                        y: arcY_1 + 1.5 * _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW * Math.sin(angle),
                        d: 0
                    });
                });
                this.context.fillStyle = currentColor;
            }
        }
    };
    PathGenerator.prototype.plotCircle = function (point) {
        this.context.beginPath();
        this.context.fillStyle = "green";
        this.context.arc(point.x, point.y, 2, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
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
        this.stop = false;
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
    Robot.prototype.setPosition = function (position) {
        this.position = position;
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
        var delta = this.stop ? { dx: 0, dy: 0, dth: 0 } : this.kinematic(speed.left, speed.right);
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
    Robot.prototype.setX = function (x) {
        this.position.x = x;
    };
    Robot.prototype.setY = function (y) {
        this.position.y = y;
    };
    Robot.prototype.setTh = function (th) {
        this.position.th = th;
    };
    Robot.prototype.toggleStop = function () {
        this.stop = !this.stop;
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
            if (sensorSide === Sides.frontLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 3,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.frontRight) {
                return {
                    x: robotPosition.x + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + 1,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backLeft) {
                return {
                    x: robotPosition.x - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW / 2 - 4,
                    y: robotPosition.y - _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].RSLCos45 + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rH + _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"].robotAttr.rW,
                    side: sensorSide
                };
            }
            if (sensorSide === Sides.backRight) {
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
    SpeedController.prototype.calcWheelsSpeed3 = function (sensorObstDistances, currentSpeed) {
        var frontLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
        var frontRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
        var backLeftDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
        var backRightDist = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
        var calcSpeed = { left: SpeedController.MaxSpeed / 2, right: SpeedController.MaxSpeed / 2 };
        var angleCode = ((frontLeftDist < SpeedController.MaxDistance ? 1 : 0) << 3) |
            ((frontRightDist < SpeedController.MaxDistance ? 1 : 0) << 2) |
            ((backLeftDist < SpeedController.MaxDistance ? 1 : 0) << 1) |
            ((backRightDist < SpeedController.MaxDistance ? 1 : 0));
        var frontRightTurn = frontRightDist < SpeedController.MaxDistance ? 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)) : 0;
        var frontLeftTurn = frontLeftDist < SpeedController.MaxDistance ? 1 - Math.exp(0.01 * Math.sqrt(Math.pow(frontLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)) : 0;
        var backRightTurn = backRightDist < SpeedController.MaxDistance ? 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backRightDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)) : 0;
        var backLeftTurn = backLeftDist < SpeedController.MaxDistance ? 1 - Math.exp(0.01 * Math.sqrt(Math.pow(backLeftDist - SpeedController.MaxDistance, 2) / SpeedController.MaxDistance)) : 0;
        var obstIsOnFront = frontRightDist < SpeedController.MaxDistance && frontLeftDist < SpeedController.MaxDistance ? 1 : 0;
        var obstIsOnRight = frontRightDist < SpeedController.MaxDistance && frontLeftDist > SpeedController.MaxDistance ||
            backRightDist < SpeedController.MaxDistance && backLeftDist > SpeedController.MaxDistance
            ? 1 : 0;
        var obstIsOnLeft = frontLeftDist < SpeedController.MaxDistance && frontRightDist > SpeedController.MaxDistance ||
            backLeftDist < SpeedController.MaxDistance && backRightDist > SpeedController.MaxDistance
            ? 1 : 0;
        debugger;
        var alpha = (frontRightTurn - backRightTurn) * obstIsOnRight + obstIsOnFront * (frontRightTurn + frontLeftTurn) * 0.5;
        var beta = (frontLeftTurn - backLeftTurn) * obstIsOnLeft;
        calcSpeed.left += SpeedController.MaxSpeed / 2 * alpha;
        calcSpeed.right += SpeedController.MaxSpeed / 2 * beta;
        this.lastDistanceToObstacles = sensorObstDistances;
        return calcSpeed;
    };
    SpeedController.MaxSpeed = 700;
    SpeedController.MaxDistance = 80;
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
        var speed = this.conroller.calcWheelsSpeed3(sensorDistances, this.robot.getSpeed());
        this.robot.animate(speed);
        this.obstacles.show();
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
                this.robot.animate({ right: 160, left: 150 });
                break;
            }
            case "left": {
                this.robot.animate({ right: 150, left: 160 });
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
            case "stop": {
                this.robot.toggleStop();
                break;
            }
            case "step": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed3(sensorDistances, this.robot.getSpeed());
                this.robot.animate(speed);
                this.obstacles.show();
                _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
                break;
            }
            case "start": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed2(sensorDistances, this.robot.getSpeed());
                this.robot.animate(speed);
                this.obstacles.show();
                break;
            }
            case "x": {
                this.robot.setX(parseFloat(event.currentTarget.value));
                break;
            }
            case "y": {
                this.robot.setY(parseFloat(event.currentTarget.value));
                break;
            }
            case "th": {
                this.robot.setTh(parseFloat(event.currentTarget.value));
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
["right", "left", "forward", "backward", "step", "stop"].forEach(function (button) {
    document.getElementById(button).addEventListener("click", function (event) {
        world.handleEvent(event);
    });
});
["x", "y", "th"].forEach(function (input) {
    document.getElementById(input).addEventListener("change", function (event) {
        world.handleEvent(event);
    });
});
world.animate();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Xb3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7SUFRSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWlCLEdBQWpCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQVk7WUFDOUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUMvSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQy9ILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUcsRUFBRSxVQUFDLENBQUMsRUFBRSxHQUFHLElBQUssVUFBRyxFQUFILENBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQU0sT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFZO1lBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsR0FBRyxFQUFHLEVBQUUsVUFBQyxDQUFDLEVBQUUsR0FBRyxJQUFLLFVBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFNLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBWTtZQUN4SSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEdBQUcsRUFBRyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSyxVQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBTSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQVk7U0FDL0osQ0FBQztJQUNOLENBQUM7SUFFQSw0Q0FBd0IsR0FBeEIsVUFBeUIsT0FBZ0I7UUFBekMsaUJBNEJDO1FBM0JFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUFFLENBQUUsQ0FBQztRQUN6RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUN4QixnQkFBTTs7WUFFTCxPQUFPO2dCQUNKLENBQUMsUUFBQyxXQUFXLENBQUMsR0FBRyxDQUNiLG1CQUFTO29CQUNOLE9BQU87d0JBQ04sQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNiLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQzt3QkFDYixDQUFDLEVBQUUsS0FBSSxDQUFDLCtCQUErQixDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxFQUFDLFNBQVMsQ0FBQztxQkFDMUUsQ0FBQztnQkFDZCxDQUFDLENBQ0osQ0FBQyxJQUFJLENBQUUsVUFBQyxHQUFHLEVBQUMsR0FBRztvQkFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUNiO3lCQUFNLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUN0QixPQUFPLENBQUMsQ0FBQztxQkFDWjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsQ0FBQztxQkFDWjtvQkFBQSxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxDQUFDO2dCQUNSLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSTthQUNBLENBQUM7UUFDckIsQ0FBQyxDQUNKLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRUYsaUNBQWEsR0FBYixVQUFlLGFBQXNCO1FBQXJDLGlCQWtCQztRQWpCRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUFFLENBQUUsQ0FBQyxHQUFHLENBQzNELG1CQUFTO1lBQ04sT0FBTztnQkFDTixDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxLQUFJLENBQUMsK0JBQStCLENBQUMsYUFBYSxFQUFDLFNBQVMsQ0FBQzthQUN2RCxDQUFDO1FBQ2QsQ0FBQyxDQUNKLENBQUMsSUFBSSxDQUFFLFVBQUMsR0FBRyxFQUFDLEdBQUc7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUFBLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtREFBK0IsR0FBL0IsVUFBaUMsYUFBc0IsRUFBQyxLQUFXO1FBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFORyx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUUsZUFBSztZQUMxQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBRSxFQUZ3QixDQUV4QixDQUFDLENBQUM7SUFHVCxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLEtBQVk7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQXhGTSxlQUFLLEdBQUcsR0FBRyxDQUFDO0lBMEZ2QixnQkFBQztDQUFBO0FBakdxQjtBQW1HUCxtRUFBSSxTQUFTLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25IL0I7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7QUFFL0M7SUFJSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUNuRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxFQUFELENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDbkYsY0FBSSxJQUFJLFdBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBaEQsQ0FBZ0QsQ0FDM0QsQ0FBQztJQUNOLENBQUM7SUFFRCxzREFBOEIsR0FBOUIsVUFBK0IsT0FBeUIsRUFBRSxhQUF1QjtRQUFqRixpQkEyQkM7UUExQkcsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksS0FBSyxtREFBSyxDQUFDLFNBQVMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLG1EQUFLLENBQUMsVUFBVSxFQUE5QixDQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEtBQUssbURBQUssQ0FBQyxRQUFRLEVBQTVCLENBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksS0FBSyxtREFBSyxDQUFDLFNBQVMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RSxJQUFJLFlBQVksSUFBSSxDQUFDLEdBQUMsNENBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwQyxhQUFhLElBQUksQ0FBQyxHQUFDLDRDQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCLElBQUksYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRTtnQkFFM0UsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQzVDLElBQU0sTUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQU0sTUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLDRDQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFFeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFLO29CQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDO3dCQUNaLENBQUMsRUFBRSxNQUFJLEdBQUcsR0FBRyxHQUFHLDRDQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDcEQsQ0FBQyxFQUFFLE1BQUksR0FBRyxHQUFHLEdBQUcsNENBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUNwRCxDQUFDLEVBQUUsQ0FBQztxQkFDRSxDQUFDLENBQUM7Z0JBRWhCLENBQUMsQ0FDQSxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUN6QztTQUNKO0lBQ0wsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFZO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDO0FBR2MsbUVBQUksYUFBYSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMzRG5DO0FBQUE7QUFBQTtBQUFzRDtBQVV0RDtJQXNCSTtRQWxCUSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBV3JCLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFFVixhQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBYyxDQUFDO1FBQ2hELFVBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBVyxDQUFDO1FBQzNDLGlCQUFZLEdBQUMsSUFBSSwwREFBWSxFQUFFLENBQUM7UUFJNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQkFBVSxHQUFWLFVBQVcsUUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztJQUMxQyxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLFFBQWtCO1FBQTVCLGlCQWlDQztRQWhDRyxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVMsRUFBRSxFQUFVO1lBQ3RDLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUUsQ0FBQztZQUN0RCxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckQsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFFLENBQUM7WUFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUVGLElBQU0sVUFBVSxHQUFHLFVBQUMsS0FBWTtZQUM1QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxLQUFLLENBQUMsQ0FBQztZQUMvRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQzlELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEdBQUUsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUUsQ0FBQztRQUNoRSxVQUFVLENBQUUsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUUsQ0FBQztRQUN4QixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDekQsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNyQixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBRSxDQUFDO1FBQzFELFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFFLENBQUM7UUFDeEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUMvQyxVQUFVLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDZixXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUUsQ0FBQztRQUU3RCxXQUFXLENBQUMsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUcsQ0FBQztRQUMvQixXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUUsQ0FBQztRQUN6QyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBR0QsMEJBQVUsR0FBVixVQUFXLFFBQWtCO1FBQTdCLGlCQWlDQztRQWhDRyxJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNoQyxJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVMsRUFBRSxFQUFVO1lBQ3RDLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyRSxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDckUsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFFLENBQUM7WUFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUM5RCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUMxRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUMzRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN4RCxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3pELFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNqQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMs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RyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQztRQUM5TCxJQUFNLGFBQWEsR0FBRyxhQUFhLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRSxlQUFlLENBQUMsV0FBVyxDQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7UUFDM0wsSUFBTSxhQUFhLEdBQUcsYUFBYSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUUsZUFBZSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3TCxJQUFNLFlBQVksR0FBRyxZQUFZLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRSxlQUFlLENBQUMsV0FBVyxDQUFFLENBQUMsRUFBQyxFQUFDLENBQUM7UUFFeEwsSUFBTSxhQUFhLEdBQUcsY0FBYyxHQUFHLGVBQWUsQ0FBQyxXQUFXLElBQUksYUFBYSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN6SCxJQUFNLGFBQWEsR0FB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SztRQUMzRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQXFCLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50TWluaW11bSB7XHJcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxyXG4gICAgeTogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCBleHRlbmRzIFBvaW50TWluaW11bSB7XHJcbiAgICBkOm51bWJlciAvLyBkaXN0YW5jZSBmcm9tIHJvYm90XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yRGlzdGFuY2Uge1xyXG4gICAgc2lkZTogU2lkZXMsXHJcbiAgICBkOm51bWJlciAvLyBkaXN0YW5jZSBmcm9tIHJvYm90XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYnN0YWNsZXMge1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cclxuICAgIHdhbGxzOiBBcnJheTxBcnJheTxQb2ludD4+O1xyXG4gICAgb2JzdGFjbGVzOiBBcnJheTxQb2ludD47XHJcbiAgICBzdGF0aWMgcldhbGwgPSAwLjU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU9ic3RhY2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlT2JzdGFjbGVzKCkge1xyXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiAwLCB5OiBudW19OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy5oZWlnaHQgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMud2lkdGgsIHk6IG51bSB9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHR9OyB9KSBhcyBbUG9pbnRdLFxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiAwfTsgfSkgYXMgW1BvaW50XSxcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43ICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjMgfTsgfSkgYXMgW1BvaW50XSxcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43ICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCAtIG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyB9OyB9KSBhcyBbUG9pbnRdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAgY2FsY0Rpc3RhbmNlc0Zyb21TZW5zb3JzKHNlbnNvcnM6U2Vuc29yW10pOlNlbnNvckRpc3RhbmNlW10ge1xyXG4gICAgICAgIGNvbnN0IHdhbGxzUG9pbnRzID0gdGhpcy53YWxscy5yZWR1Y2UoIChwcnYsY3VyKSA9PiBwcnYuY29uY2F0KGN1ciksW10gKTtcclxuICAgICAgICBjb25zdCBzZW5zRGlzdCA9IHNlbnNvcnMubWFwKFxyXG4gICAgICAgICAgICBzZW5zb3IgPT4gXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZDp3YWxsc1BvaW50cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgd2FsbFBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OndhbGxQb2ludC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OndhbGxQb2ludC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUoe3g6c2Vuc29yLngseTpzZW5zb3IueSx0aDpudWxsIH0sd2FsbFBvaW50KSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggcHJ2LmQgPCBjdXIuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KVswXT8uZCxcclxuICAgICAgICAgICAgICAgIHNpZGU6c2Vuc29yLnNpZGVcclxuICAgICAgICAgICAgIH0gYXMgU2Vuc29yRGlzdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBzZW5zRGlzdDtcclxuICAgICB9XHJcblxyXG4gICAgY2FsY0Rpc3RhbmNlcyggcm9ib3RQb3NpdGlvbjpQb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApLm1hcChcclxuICAgICAgICAgICAgd2FsbFBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHg6d2FsbFBvaW50LngsXHJcbiAgICAgICAgICAgICAgICB5OndhbGxQb2ludC55LFxyXG4gICAgICAgICAgICAgICAgZDogdGhpcy5kaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKHJvYm90UG9zaXRpb24sd2FsbFBvaW50KSAgICAgIFxyXG4gICAgICAgICAgICAgICB9IGFzIFBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcclxuICAgICAgICAgICAgaWYoIHBydi5kIDwgY3VyLmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUoIHJvYm90UG9zaXRpb246UG9zaXRpb24scG9pbnQ6UG9pbnQpe1xyXG4gICAgICAgICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3cocm9ib3RQb3NpdGlvbi54LXBvaW50LngsMikgKyBNYXRoLnBvdyhyb2JvdFBvc2l0aW9uLnktcG9pbnQueSwyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICAvLyB0aGlzLmNhbGNEaXN0YW5jZXMoKTtcclxuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB3YWxsLmZvckVhY2goIHBvaW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHBvaW50KTtcclxuICAgICAgICB9ICkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsb3RDaXJjbGUocG9pbnQgOlBvaW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9pbnQueCwgcG9pbnQueSwgT2JzdGFjbGVzLnJXYWxsLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChcIkhlbGxvIFdvcmxkXCIsIDEwLCA1MCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzdGFjbGVzKCk7IiwiaW1wb3J0IHsgUG9pbnQsIFNlbnNvckRpc3RhbmNlIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uLCBSb2JvdCB9IGZyb20gXCIuL1JvYm90XCI7XHJcbmltcG9ydCB7IFNlbnNvciwgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcclxuXHJcbmNsYXNzIFBhdGhHZW5lcmF0b3Ige1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5nZU9mQW5nbGVzKGZyb206IG51bWJlciwgdG86IG51bWJlciwgc3RlcDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoTWF0aC5hYnMoKHRvIC0gZnJvbSkgLyBzdGVwKSkgfSwgKHgsIGkpID0+IGkpLm1hcChcclxuICAgICAgICAgICAgaW5keCA9PiBzdGVwID4gMCA/IGZyb20gKyBpbmR4ICogc3RlcCA6IHRvICsgaW5keCAqIHN0ZXBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JzOiBTZW5zb3JEaXN0YW5jZVtdLCByb2JvdFBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGZyb250TGVmdERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkuZDtcclxuICAgICAgICBjb25zdCBmcm9udFJpZ2h0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcclxuICAgICAgICBjb25zdCBiYWNrTGVmdERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KS5kO1xyXG4gICAgICAgIGNvbnN0IGJhY2tSaWdodERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkuZDtcclxuXHJcbiAgICAgICAgaWYgKGJhY2tMZWZ0RGlzdCA8PSAzKlJvYm90LnJvYm90QXR0ci5yVyAmJlxyXG4gICAgICAgICAgICBiYWNrUmlnaHREaXN0IDw9IDMqUm9ib3Qucm9ib3RBdHRyLnJXKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgaWYgKHJvYm90UG9zaXRpb24udGggPj0gLU1hdGguUEkqMTUvMTgwICYmIHJvYm90UG9zaXRpb24udGggPD0gTWF0aC5QSSoxNS8xODApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJjWCA9IHJvYm90UG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyY1kgPSByb2JvdFBvc2l0aW9uLnkgKyAxLjUgKiBSb2JvdC5yb2JvdEF0dHIuclc7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSYW5nZU9mQW5nbGVzKE1hdGguUEkgLyAyLCAwLCAtMC4wMikuZm9yRWFjaChhbmdsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYXJjWCArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVyAqIE1hdGguY29zKGFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogYXJjWSArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVyAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZDogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgUG9pbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsb3RDaXJjbGUocG9pbnQ6IFBvaW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXRoR2VuZXJhdG9yKCk7XHJcbiIsImltcG9ydCB7IFNwZWVkIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XHJcbmltcG9ydCB7IFNlbnNvciwgU29uYXJTZW5zb3JzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XHJcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxyXG4gICAgeTogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHlcclxuICAgIHRoOiBudW1iZXIgLy8gdGhldGEgb3JpZW50YXRpb24gb2Ygcm9ib3QgaW4gMiBEaW1lbnRpb25cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb2JvdCB7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcml2YXRlIHN0b3AgPSBmYWxzZTtcclxuICAgIHN0YXRpYyByb2JvdEF0dHIgPSB7XHJcbiAgICAgICAgV2hlZWxSOiA1LFxyXG4gICAgICAgIHJIOiA2MCxcclxuICAgICAgICByVzogMzAsXHJcbiAgICAgICAgclNMOiAyMCxcclxuICAgICAgICByU1c6IDNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIFJTTENvczQ1ID0gTWF0aC5jb3MoTWF0aC5QSSAvIDQpICogUm9ib3Qucm9ib3RBdHRyLnJTTDtcclxuXHJcbiAgICBkdCA9IDAuMDE7XHJcblxyXG4gICAgcG9zaXRpb24gPSB7IHg6IDE1MCwgeTogMTUwLCB0aDowIH0gYXMgUG9zaXRpb247XHJcbiAgICBzcGVlZCA9IHsgcmlnaHQ6IDEwMCwgbGVmdDogMTAwIH0gYXMgU3BlZWQ7XHJcbiAgICBzb25hclNlbnNvcnM9bmV3IFNvbmFyU2Vuc29ycygpO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxvdENpcmNsZShwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIDMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHBsb3RSb2JvdChwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IG1vdmVBbmRUdXJuID0gKGQ6IG51bWJlciwgdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnggKyBkICogTWF0aC5jb3ModGggKTtcclxuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcHJldmlvdXNQb3NpdGlvbi55ICsgZCAqIE1hdGguc2luKHRoKTtcclxuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbnNIb2xkZXIgPSAoYW5nbGU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCAtTWF0aC5QSS80K2FuZ2xlKTtcclxuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgcG9zaXRpb24udGgrTWF0aC5QSS80ICthbmdsZSk7XHJcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCArMypNYXRoLlBJLzQrYW5nbGUpO1xyXG4gICAgICAgIH07IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocHJldmlvdXNQb3NpdGlvbi54ICwgcHJldmlvdXNQb3NpdGlvbi55ICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLzIgLTIgLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoIE1hdGguUEkvMiApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIHBvc2l0aW9uLnRoICsgTWF0aC5QSSApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoTWF0aC5QSSApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVyAsIHBvc2l0aW9uLnRoIC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBzZW5zSG9sZGVyKC1NYXRoLlBJLzIgKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIHNlbnNIb2xkZXIoMCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yVy8yICwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcclxuXHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgIHBvc2l0aW9uLnRoICApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDIsIHBvc2l0aW9uLnRoICsgTWF0aC5QSS8yICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgcG9zaXRpb24udGgrIE1hdGguUEkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbG90Um9ib3QyKHBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBwcmV2aW91c1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgbW92ZUFuZFR1cm4gPSAoZDogbnVtYmVyLCB0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueCArIGQgKiBNYXRoLmNvcyh0aCAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnkgKyBkICogTWF0aC5zaW4odGggKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeENvb3JkLCB5Q29vcmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwcmV2aW91c1Bvc2l0aW9uLnggLCBwcmV2aW91c1Bvc2l0aW9uLnkgKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCA5MCArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xODAgLSA0NSArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC00NSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCA5MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybig0LCAwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIC05MCsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAwKyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC00NSsgcG9zaXRpb24udGggKTtcclxuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgMjIrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJILCAtOTArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC0xMzUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIC0yMjUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLCAxODArIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTkwIC0gNDUrIHBvc2l0aW9uLnRoICk7XHJcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTVywgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC0xODAgLSA5MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24ocG9zaXRpb246UG9zaXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BlZWQoKTogU3BlZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoc3BlZWQ6IFNwZWVkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuY2FsY05ld1Bvc2l0aW9uKHNwZWVkKTtcclxuICAgICAgICB0aGlzLnBsb3RSb2JvdCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnNvbmFyU2Vuc29ycy5zaG93KHRoaXMucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNOZXdQb3NpdGlvbihzcGVlZDogU3BlZWQpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMuc3RvcD8geyBkeDogMCwgZHk6IDAsIGR0aDogMCB9OiB0aGlzLmtpbmVtYXRpYyhzcGVlZC5sZWZ0LCBzcGVlZC5yaWdodCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IGRlbHRhLmR4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkZWx0YS5keTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRoICs9IGRlbHRhLmR0aCA7XHJcbiAgICB9XHJcblxyXG4gICAga2luZW1hdGljKGxlZnRXZWVsU3BlZWQ6IG51bWJlciwgcmlnaHRXaGVlbFNwZWVkOiBudW1iZXIpOiB7IGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIGR0aDogbnVtYmVyIH0ge1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclZlbG9jaXR5ID0gKHJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpIC8gMjtcclxuICAgICAgICBjb25zdCBhbmd1bGFyVmVsb2NpdHkgPSBsZWZ0V2VlbFNwZWVkLXJpZ2h0V2hlZWxTcGVlZDtcclxuICAgICAgICBjb25zdCBkdGggPWFuZ3VsYXJWZWxvY2l0eSAqIHRoaXMuZHQgKjIqIE1hdGguUEkqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvIFJvYm90LnJvYm90QXR0ci5yVztcclxuICAgICAgICAvLyBjb25zdCB0aGV0YSA9IHRoaXMucG9zaXRpb24udGggKyBkdGg7XHJcbiAgICAgICAgY29uc3QgZHggPWxpbmVhclZlbG9jaXR5ICogTWF0aC5jb3ModGhpcy5wb3NpdGlvbi50aCkgKiB0aGlzLmR0ICogUm9ib3Qucm9ib3RBdHRyLldoZWVsUi8yO1xyXG4gICAgICAgIGNvbnN0IGR5ID1saW5lYXJWZWxvY2l0eSAqIE1hdGguc2luKHRoaXMucG9zaXRpb24udGgpICogdGhpcy5kdCAqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZHgsIGR5LCBkdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZW5zb3JzKCk6QXJyYXk8U2Vuc29yPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uYXJTZW5zb3JzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHRoaXMuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WCh4Om51bWJlcikgOnZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WSh5Om51bWJlcikgOnZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGgodGg6bnVtYmVyKSA6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCA9IHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN0b3AoKXtcclxuICAgICAgICB0aGlzLnN0b3AgPSAhdGhpcy5zdG9wO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvaW50LCBQb2ludE1pbmltdW0gfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yIGV4dGVuZHMgUG9pbnQge1xyXG4gICAgc2lkZTogc3RyaW5nLFxyXG4gICAgZGM6IG51bWJlciAvLyBkaXN0YW5jZSBmcm9tIGNlbnRlclxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFNpZGVzIHtcclxuICAgIGZyb250TGVmdCA9IFwiZnJvbnRMZWZ0XCIsXHJcbiAgICBmcm9udFJpZ2h0ID0gXCJmcm9udFJpZ2h0XCIsXHJcbiAgICBiYWNrTGVmdCA9IFwiYmFja0xlZnRcIixcclxuICAgIGJhY2tSaWdodCA9IFwiYmFja1JpZ2h0XCIsXHJcbiAgICBtaWRkbGUgPSBcIm1pZGRsZVwiLFxyXG4gICAgY2VudGVyID0gXCJjZW50ZXJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29uYXJTZW5zb3JzIHtcclxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxEaXN0KHBvaW50MTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBwb2ludDI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnQxLnggLSBwb2ludDIueCwgMikgKyBNYXRoLnBvdyhwb2ludDEueSAtIHBvaW50Mi55LCAyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsQW5nbGUocG9pbnQxOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sIHBvaW50MjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbigocG9pbnQyLnkgLSBwb2ludDEueSkvKHBvaW50Mi54IC0gcG9pbnQxLngpKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjU2Vuc29yc1Bvc2l0aW9ucyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbik6IEFycmF5PFNlbnNvcj4ge1xyXG4gICAgICAgIHJldHVybiBbU2lkZXMuZnJvbnRMZWZ0LCBTaWRlcy5mcm9udFJpZ2h0LCBTaWRlcy5iYWNrTGVmdCwgU2lkZXMuYmFja1JpZ2h0LCBTaWRlcy5taWRkbGUsIFNpZGVzLmNlbnRlcl1cclxuICAgICAgICAgICAgLm1hcChzZW5zb3JTaWRlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5jZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZSxcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5taWRkbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSArIFJvYm90LnJvYm90QXR0ci5ySCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5mcm9udExlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBSb2JvdC5SU0xDb3M0NSAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgLSBSb2JvdC5SU0xDb3M0NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggKyBSb2JvdC5SU0xDb3M0NSArIFJvYm90LnJvYm90QXR0ci5yVyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSAtIFJvYm90LlJTTENvczQ1ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54IC0gUm9ib3QuUlNMQ29zNDUgLSBSb2JvdC5yb2JvdEF0dHIuclcgLyAyIC0gNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuckggKyBSb2JvdC5yb2JvdEF0dHIuclcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggKyBSb2JvdC5SU0xDb3M0NSArIFJvYm90LnJvYm90QXR0ci5yVyAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByb2JvdFBvc2l0aW9uLnkgKyBSb2JvdC5SU0xDb3M0NSArIFJvYm90LnJvYm90QXR0ci5ySCArIDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGU6IHNlbnNvclNpZGVcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5tYXAoc2VucyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZW5zQ2FsYyA9IHNlbnM7XHJcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy5kYyA9IHRoaXMuY2FsRGlzdChyb2JvdFBvc2l0aW9uLCBzZW5zQ2FsYyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuY2FsQW5nbGUocm9ib3RQb3NpdGlvbiwgc2Vuc0NhbGMpICtcclxuICAgICAgICAgICAgICAgIChzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCB8fCBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0ID8gTWF0aC5QSSA6IDApICtcclxuICAgICAgICAgICAgICAgIHJvYm90UG9zaXRpb24udGggICsgTWF0aC5QSS8yIDtcclxuICAgICAgICAgICAgICAgIHNlbnNDYWxjLnggPSByb2JvdFBvc2l0aW9uLnggKyBzZW5zQ2FsYy5kYyAqIE1hdGguY29zKGFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy55ID0gcm9ib3RQb3NpdGlvbi55ICsgc2Vuc0NhbGMuZGMgKiBNYXRoLnNpbihhbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbnNDYWxjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhyb2JvdFBvc2l0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgY29uc3Qgc2Vuc29ycyA9IHRoaXMuY2FsY1NlbnNvcnNQb3NpdGlvbnMocm9ib3RQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsb3RDaXJjbGUoeyB4OiBzZW5zb3IueCwgeTogc2Vuc29yLnksIHRoOiByb2JvdFBvc2l0aW9uLnRoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbG90Q2lyY2xlKHBvaXN0aW9uOiBQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQucm90YXRlKHBvaXN0aW9uLnRoKk1hdGguUEkvMTgwKTtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIm9yYW5nZVwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9pc3Rpb24ueCwgcG9pc3Rpb24ueSwgMywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBkZWZhdWx0Q29sb3I7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBQb2ludCwgU2Vuc29yRGlzdGFuY2UgfSBmcm9tIFwiLi9PYnN0YWNsZXNcIjtcclxuaW1wb3J0IHsgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xyXG5pbXBvcnQgeyBTZW5zb3IsIFNpZGVzIH0gZnJvbSBcIi4vU29uYXJTZW5zb3JzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwZWVkIHtcclxuICAgIHJpZ2h0OiBudW1iZXIsXHJcbiAgICBsZWZ0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWVkQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XHJcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcclxuXHJcbiAgICBsYXN0RGlzdGFuY2VUb09ic3RhY2xlczpTZW5zb3JEaXN0YW5jZVtdO1xyXG5cclxuICAgIGNhbGNXaGVlbHNTcGVlZChvYnN0YWNsZURpc3RhbmNlczogQXJyYXk8UG9pbnQ+LCBjdXJyZW50U3BlZWQ6IFNwZWVkKTogU3BlZWQge1xyXG4gICAgICAgIGlmIChvYnN0YWNsZURpc3RhbmNlcy5zb21lKHBvaW50ID0+IHBvaW50LmQgPCAxMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBjdXJyZW50U3BlZWQucmlnaHQgKiAoLTEpLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogY3VycmVudFNwZWVkLmxlZnQgKiAoLTEpLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudFNwZWVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxjV2hlZWxzU3BlZWQyKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQpOiBTcGVlZCB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBmcm9udExlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XHJcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XHJcbiAgICAgICAgY29uc3QgYmFja0xlZnREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcclxuICAgICAgICBjb25zdCBiYWNrUmlnaHREaXN0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XHJcblxyXG4gICAgICAgIGxldCBjYWxjU3BlZWQ6IFNwZWVkID0geyBsZWZ0OiBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQsIHJpZ2h0OiBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNvZWYgPSAoMSAtIE1hdGguZXhwKC0wLjA0ICogTWF0aC5zcXJ0KE1hdGgucG93KGZyb250TGVmdERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpICtcclxuICAgICAgICBNYXRoLnBvdyhmcm9udFJpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xyXG4gICAgICAgIE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xyXG4gICAgICAgIE1hdGgucG93KGJhY2tSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpKSAvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSkpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGVlZE1heCA9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqICgxIC0gTWF0aC5leHAoLTAuOCAqIE1hdGguc3FydChNYXRoLnBvdyhmcm9udExlZnREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KGZyb250UmlnaHREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdyhiYWNrUmlnaHREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKSkgLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5nbGVDb2RlID0gKChmcm9udExlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDMpIHxcclxuICAgICAgICAgICAgKChmcm9udFJpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAyKSB8XHJcbiAgICAgICAgICAgICgoYmFja0xlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApIDw8IDEpIHxcclxuICAgICAgICAgICAgKChiYWNrUmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMSA6IDApKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodFR1cm4gPSAxIC0gTWF0aC5leHAoMC4wMSpNYXRoLnNxcnQoICBNYXRoLnBvdyhmcm9udFJpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSApKTtcclxuICAgICAgICBjb25zdCBmcm9udExlZnRUdXJuID0gMSAtIE1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coZnJvbnRMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSApKTtcclxuICAgICAgICBjb25zdCBiYWNrUmlnaHRUdXJuID0gMSAtIE1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coYmFja1JpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSApKTtcclxuICAgICAgICBjb25zdCBiYWNrTGVmdFR1cm4gPSAxIC0gTWF0aC5leHAoMC4wMSpNYXRoLnNxcnQoICBNYXRoLnBvdyhiYWNrTGVmdERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgKSk7XHJcbiAgIFxyXG4gICAgICAgIC8vICAgICBSICBMXHJcbiAgICAgICAgLy8gRiAgIDQgIDggICAgPT4gMTJcclxuICAgICAgICAvLyBCICAgMSAgMiAgICA9PiAzXHJcbiAgICAgICAgLy8gICAgfHwgIHx8XHJcbiAgICAgICAgLy8gICAgNSAgIDEwXHJcbiAgICAgICAgbGV0IGFscGhhID0gYW5nbGVDb2RlID4gMCA/IChmcm9udFJpZ2h0VHVybiArIGJhY2tSaWdodFR1cm4gKSAqMC41OjE7XHJcbiAgICAgICAgbGV0IGJldGEgID0gYW5nbGVDb2RlID4gMCA/IChmcm9udExlZnRUdXJuICArIGJhY2tMZWZ0VHVybiAgKSAqMC41OjE7XHJcblxyXG4gICAgICAgIC8vIHN3aXRjaCAoYW5nbGVDb2RlKSB7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgKDMpOlxyXG4gICAgICAgIC8vICAgICAgICAgYWxwaGEgPSAwLjAyO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vICAgICBjYXNlICgyKTpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICgxKTpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICg0KTpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICg1KTpcclxuICAgICAgICAvLyAgICAgICAgIGFscGhhID0gMC4wMjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyAgICAgY2FzZSAoOCk6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcblxyXG4gICAgICAgIC8vICAgICBjYXNlICgxMCk6XHJcbiAgICAgICAgLy8gICAgICAgICBhbHBoYSA9IDAuMDI7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgYWxwaGEgPSAwLjAwO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjYWxjU3BlZWQubGVmdCA9IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAgKiAgYWxwaGE7XHJcbiAgICAgICAgY2FsY1NwZWVkLnJpZ2h0ID0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkICogYmV0YSA7XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxjU3BlZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGNXaGVlbHNTcGVlZDMoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCk6IFNwZWVkIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250TGVmdERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkuZDtcclxuICAgICAgICBjb25zdCBmcm9udFJpZ2h0RGlzdCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcclxuICAgICAgICBjb25zdCBiYWNrTGVmdERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KS5kO1xyXG4gICAgICAgIGNvbnN0IGJhY2tSaWdodERpc3QgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkuZDtcclxuXHJcbiAgICAgICAgbGV0IGNhbGNTcGVlZDogU3BlZWQgPSB7IGxlZnQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZC8yLCByaWdodDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkLzIgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFuZ2xlQ29kZSA9ICgoZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAzKSB8XHJcbiAgICAgICAgICAgICgoZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxIDogMCkgPDwgMikgfFxyXG4gICAgICAgICAgICAoKGJhY2tMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSA8PCAxKSB8XHJcbiAgICAgICAgICAgICgoYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEgOiAwKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHRUdXJuID0gZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxLU1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coZnJvbnRSaWdodERpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UsIDIpLyBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgKSk6MDtcclxuICAgICAgICBjb25zdCBmcm9udExlZnRUdXJuID0gZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDEtTWF0aC5leHAoMC4wMSpNYXRoLnNxcnQoICBNYXRoLnBvdyhmcm9udExlZnREaXN0IC0gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlLCAyKS8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICkpOjA7XHJcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0VHVybiA9IGJhY2tSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgPyAxLU1hdGguZXhwKDAuMDEqTWF0aC5zcXJ0KCAgTWF0aC5wb3coYmFja1JpZ2h0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSApKSA6IDA7XHJcbiAgICAgICAgY29uc3QgYmFja0xlZnRUdXJuID0gYmFja0xlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlID8gMS1NYXRoLmV4cCgwLjAxKk1hdGguc3FydCggIE1hdGgucG93KGJhY2tMZWZ0RGlzdCAtIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSwgMikvIFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSApKTowO1xyXG4gICBcclxuICAgICAgICBjb25zdCBvYnN0SXNPbkZyb250ID0gZnJvbnRSaWdodERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiYgZnJvbnRMZWZ0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSA/IDE6IDA7XHJcbiAgICAgICAgY29uc3Qgb2JzdElzT25SaWdodCA9IGZyb250UmlnaHREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmIGZyb250TGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA8IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSAmJiBiYWNrTGVmdERpc3QgPiBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgXHJcbiAgICAgICAgICA/IDE6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic3RJc09uTGVmdCAgPSBmcm9udExlZnREaXN0IDwgU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlICYmIGZyb250UmlnaHREaXN0ID4gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlIHx8XHJcbiAgICAgICAgICBiYWNrTGVmdERpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgJiYgYmFja1JpZ2h0RGlzdCA+IFNwZWVkQ29udHJvbGxlci5NYXhEaXN0YW5jZSBcclxuPyAxOiAwO1xyXG5cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBsZXQgYWxwaGEgPSAoZnJvbnRSaWdodFR1cm4tIGJhY2tSaWdodFR1cm4pICogb2JzdElzT25SaWdodCAgKyBvYnN0SXNPbkZyb250ICogKGZyb250UmlnaHRUdXJuICsgZnJvbnRMZWZ0VHVybiApICogMC41IDtcclxuICAgICAgICBsZXQgYmV0YSAgPSAoZnJvbnRMZWZ0VHVybiAtIGJhY2tMZWZ0VHVybikgKiBvYnN0SXNPbkxlZnQ7XHJcblxyXG4gICAgICAgIGNhbGNTcGVlZC5sZWZ0ICArPSBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQvMiAgKiBhbHBoYTtcclxuICAgICAgICBjYWxjU3BlZWQucmlnaHQgKz0gU3BlZWRDb250cm9sbGVyLk1heFNwZWVkLzIgICogYmV0YSA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RGlzdGFuY2VUb09ic3RhY2xlcyA9IHNlbnNvck9ic3REaXN0YW5jZXM7XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxjU3BlZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xyXG5pbXBvcnQgUGF0aEdlbmVyYXRvciBmcm9tIFwiLi9QYXRoR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcclxuaW1wb3J0IHsgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gIHJvYm90ID0gbmV3IFJvYm90KCk7XHJcbiAgb2JzdGFjbGVzID0gbmV3IE9ic3RhY2xlcygpO1xyXG4gIGNvbnJvbGxlciA9IG5ldyBTcGVlZENvbnRyb2xsZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcclxuICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XHJcblxyXG4gICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQzKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpKTtcclxuICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XHJcbiAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XHJcbiAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgdGhpcy5hbmltYXRlKCkgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFdmVudChldmVudDogUG9pbnRlckV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgc3dpdGNoICgoZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG4gICAgICBjYXNlIFwicmlnaHRcIjoge1xyXG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAxNjAsIGxlZnQ6IDE1MCB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwibGVmdFwiOiB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHsgcmlnaHQ6IDE1MCwgbGVmdDogMTYwIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOiB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHsgcmlnaHQ6IDE2MCwgbGVmdDogMTYwIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFwiYmFja3dhcmRcIjoge1xyXG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAtMTYwLCBsZWZ0OiAtMTYwIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFwic3RvcFwiOiB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC50b2dnbGVTdG9wKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJzdGVwXCI6IHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlcyh0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQzKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpKTtcclxuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcclxuICAgICAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkMihzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0U3BlZWQoKSk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hbmltYXRlKHNwZWVkKTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ4XCI6e1xyXG4gICAgICAgIHRoaXMucm9ib3Quc2V0WCggcGFyc2VGbG9hdCggKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOnN0cmluZ30pLnZhbHVlICkgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ5XCI6e1xyXG4gICAgICAgIHRoaXMucm9ib3Quc2V0WSggcGFyc2VGbG9hdCggKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOnN0cmluZ30pLnZhbHVlICkgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgXCJ0aFwiOntcclxuICAgICAgICB0aGlzLnJvYm90LnNldFRoKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5vYnN0YWNsZXMuc2hvdygpO1xyXG5cclxuICB9XHJcbn0iLCJcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tIFwiLi9Xb3JsZFwiO1xyXG5cclxuY29uc3Qgd29ybGQgPSBuZXcgV29ybGQoKTtcclxuXHJcbltcInJpZ2h0XCIsIFwibGVmdFwiLCBcImZvcndhcmRcIiwgXCJiYWNrd2FyZFwiLCBcInN0ZXBcIiwgXCJzdG9wXCJdLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICB3b3JsZC5oYW5kbGVFdmVudChldmVudCBhcyBQb2ludGVyRXZlbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuKTtcclxuXHJcbltcInhcIixcInlcIixcInRoXCJdLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG53b3JsZC5hbmltYXRlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=