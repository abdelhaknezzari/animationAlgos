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
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");


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
            Array.from({ length: this.canvas.width * 0.15 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.3, y: _this.canvas.height * 0.45 - num }; }),
            Array.from({ length: this.canvas.width * 0.15 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.7, y: _this.canvas.height * 0.70 - num }; }),
            Array.from({ length: this.canvas.width * 0.11 }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.height * 0.7, y: _this.canvas.height - num }; }),
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
    };
    Obstacles.prototype.calcDistancesAsJson = function () {
        var sensorObstDistances = this.calcDistancesFromSensors(_Robot__WEBPACK_IMPORTED_MODULE_0__["default"].getSensors());
        var frontLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontLeft; }).d;
        var frontRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].frontRight; }).d;
        var backLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backLeft; }).d;
        var backRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_1__["Sides"].backRight; }).d;
        return { frontLeft: frontLeft, frontRight: frontRight, backLeft: backLeft, backRight: backRight };
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
        this.context.fillText("frontLeftDist:" + frontLeftDist, 1, 10);
        this.context.fillText("backLeftDist:" + backLeftDist, 1, 30);
        this.context.fillText("frontRightDist:" + frontRightDist, 1, 50);
        this.context.fillText("backRightDist:" + backRightDist, 1, 70);
        this.context.fillText("Theta:" + robotPosition.th, 1, 90);
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
/*! exports provided: Robot, default */
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
        this.delta = { dx: 0, dy: 0, dth: 0 };
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
    Robot.prototype.keepRobotInWindows = function () {
        if (this.position.x >= 970) {
            this.delta.dx = -this.delta.dx;
            this.delta.dth = -this.delta.dth;
        }
        if (this.position.y >= 970 || this.position.y <= 5) {
            this.delta.dy = -this.delta.dy;
            this.delta.dth = -this.delta.dth;
        }
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
        this.delta = this.stop ? { dx: 0, dy: 0, dth: 0 } : this.kinematic(speed.left, speed.right);
        this.position.x += this.delta.dx;
        this.position.y += this.delta.dy;
        this.position.th += this.delta.dth;
        this.position.th %= 2 * Math.PI;
        this.position.th = this.position.th > Math.PI ? (-2 * Math.PI + this.position.th) : this.position.th;
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

/* harmony default export */ __webpack_exports__["default"] = (new Robot());


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
/* harmony import */ var _SpeedController3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeedController3 */ "./src/SpeedController3.ts");

var SpeedController = /** @class */ (function () {
    function SpeedController() {
        this.iteration = 0;
    }
    SpeedController.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
        return _SpeedController3__WEBPACK_IMPORTED_MODULE_0__["default"].calcWheelsSpeed(sensorObstDistances, currentSpeed, robotPosition);
    };
    SpeedController.MaxSpeed = 700;
    SpeedController.MaxDistance = 80;
    return SpeedController;
}());



/***/ }),

/***/ "./src/SpeedController3.ts":
/*!*********************************!*\
  !*** ./src/SpeedController3.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SonarSensors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SonarSensors */ "./src/SonarSensors.ts");
/* harmony import */ var _SpeedController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedController */ "./src/SpeedController.ts");
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");
var _a;



/* harmony default export */ __webpack_exports__["default"] = (new (_a = /** @class */ (function () {
        function SpeedController3() {
            this.iteration = 0;
        }
        SpeedController3.prototype.wrap2Pi = function (ang) {
            return ang > Math.PI ? (-2 * Math.PI + ang) : ang;
        };
        SpeedController3.prototype.calDist2Target = function (targetPosition, robotPosition) {
            return Math.sqrt(Math.pow(targetPosition.x - robotPosition.x, 2) + Math.pow(targetPosition.y - robotPosition.y, 2));
        };
        SpeedController3.prototype.calcWheelsSpeed = function (sensorObstDistances, currentSpeed, robotPosition) {
            //const obstacleDist = this.getObstacleDist(sensorObstDistances);
            var targetPosition = _Target__WEBPACK_IMPORTED_MODULE_2__["default"].getPosition();
            var targetDistance = this.calDist2Target(targetPosition, robotPosition);
            var linearSpeed = targetDistance;
            var angularSpeed = 0.02 * Math.atan2((targetPosition.y - robotPosition.y), (targetPosition.x - robotPosition.x));
            return { right: linearSpeed * Math.cos(angularSpeed), left: linearSpeed * Math.sin(angularSpeed) };
        };
        SpeedController3.prototype.calcWheelsSpeed2 = function (sensorObstDistances, currentSpeed, robotPosition) {
            var obstacleDist = this.getObstacleDist(sensorObstDistances);
            var calcSpeed = { left: _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed / 4, right: _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed / 4 };
            calcSpeed.left += 0.01 * _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed * this.getLeftPulseObstacle(obstacleDist) + 0.01 * _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed * this.getLFrontPulseObstacle(obstacleDist);
            calcSpeed.right += 0.01 * _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxSpeed * this.getRightPulseObstacle(obstacleDist);
            return calcSpeed;
        };
        SpeedController3.prototype.getObstacleDist = function (sensorObstDistances) {
            var frontLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontLeft; }).d;
            var frontRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].frontRight; }).d;
            var backLeft = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backLeft; }).d;
            var backRight = sensorObstDistances.find(function (sens) { return sens.side === _SonarSensors__WEBPACK_IMPORTED_MODULE_0__["Sides"].backRight; }).d;
            return { frontLeft: frontLeft, frontRight: frontRight, backLeft: backLeft, backRight: backRight };
        };
        SpeedController3.prototype.getRightPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontRight) + this.calcPulse(obstacles.backRight);
        };
        SpeedController3.prototype.getLeftPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) + this.calcPulse(obstacles.backLeft);
        };
        SpeedController3.prototype.getLFrontPulseObstacle = function (obstacles) {
            return this.calcPulse(obstacles.frontLeft) * this.calcPulse(obstacles.frontRight);
        };
        SpeedController3.prototype.calcPulse2 = function (dist) {
            return Math.exp(-0.1 * Math.pow(((dist - _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance) / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance), 2));
        };
        SpeedController3.prototype.calcPulse3 = function (dist) {
            var th = dist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance
                ? Math.abs(dist / _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance)
                : 1 / 2;
            return 0.5 * (1 + Math.cos(Math.PI * th));
        };
        SpeedController3.prototype.calcPulse = function (dist) {
            return dist < _SpeedController__WEBPACK_IMPORTED_MODULE_1__["SpeedController"].MaxDistance ? 1 / (1 + Math.exp(-Math.abs(dist))) : 0;
        };
        return SpeedController3;
    }()),
    _a.MaxSpeed = 700,
    _a.MaxDistance = 80,
    _a));


/***/ }),

/***/ "./src/Target.ts":
/*!***********************!*\
  !*** ./src/Target.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new (/** @class */ (function () {
    function Target() {
        this.target = { x: 490, y: 490, th: 0 };
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    Target.prototype.showTarget = function () {
        this.context.beginPath();
        var defaultColor = this.context.fillStyle;
        this.context.fillStyle = "blue";
        this.context.arc(this.target.x, this.target.y, 3, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.fillStyle = defaultColor;
    };
    Target.prototype.getPosition = function () {
        return this.target;
    };
    return Target;
}())));


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
/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Target */ "./src/Target.ts");





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
        var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition());
        this.robot.animate(speed);
        this.obstacles.show();
        _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
        _Target__WEBPACK_IMPORTED_MODULE_4__["default"].showTarget();
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
                var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition());
                this.robot.animate(speed);
                this.obstacles.show();
                _PathGenerator__WEBPACK_IMPORTED_MODULE_1__["default"].showFrontObstaclePathAvoidance(sensorDistances, this.robot.getPosition());
                break;
            }
            case "start": {
                this.clear();
                var distances = this.obstacles.calcDistances(this.robot.getPosition());
                var sensorDistances = this.obstacles.calcDistancesFromSensors(this.robot.getSensors());
                var speed = this.conroller.calcWheelsSpeed(sensorDistances, this.robot.getSpeed(), this.robot.getPosition());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGF0aEdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvbmFyU2Vuc29ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3BlZWRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9TcGVlZENvbnRyb2xsZXIzLnRzIiwid2VicGFjazovLy8uL3NyYy9UYXJnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0s7QUF1Qi9D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QUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDeEQsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUN6RCxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDakMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBQ3ZELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRSxRQUFRLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDbkQsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUUsQ0FBQztRQUNwRCxXQUFXLENBQUMs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LENBQUMsT0FBTyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUm9ib3QsIHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU2Vuc29yLCBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50TWluaW11bSB7XG4gICAgeDogbnVtYmVyLCAvLyBwb3NpdGlvbiBjb29yZGluYXRlIHhcbiAgICB5OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IGV4dGVuZHMgUG9pbnRNaW5pbXVtIHtcbiAgICBkOm51bWJlciAvLyBkaXN0YW5jZSBmcm9tIHJvYm90XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vuc29yRGlzdGFuY2Uge1xuICAgIHNpZGU6IFNpZGVzLFxuICAgIGQ6bnVtYmVyIC8vIGRpc3RhbmNlIGZyb20gcm9ib3Rcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzIHtcbiAgICBmcm9udExlZnQ6IG51bWJlciwgXG4gICAgZnJvbnRSaWdodDpudW1iZXIsIFxuICAgIGJhY2tMZWZ0Om51bWJlciwgXG4gICAgYmFja1JpZ2h0Om51bWJlcjsgXG59XG5cbmV4cG9ydCBjbGFzcyBPYnN0YWNsZXMge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuXG4gICAgd2FsbHM6IEFycmF5PEFycmF5PFBvaW50Pj47XG4gICAgb2JzdGFjbGVzOiBBcnJheTxQb2ludD47XG4gICAgc3RhdGljIHJXYWxsID0gMC41O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlT2JzdGFjbGVzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVPYnN0YWNsZXMoKSB7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy5oZWlnaHQgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogMCwgeTogbnVtfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLmhlaWdodCB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCwgeTogbnVtIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHR9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGggIH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IG51bSwgeTogMH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjE1fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogdGhpcy5jYW52YXMuaGVpZ2h0KjAuMyAsIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjQ1LW51bSB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC4xNX0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLmhlaWdodCowLjcgLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43MC1udW0gfTsgfSkgYXMgW1BvaW50XSxcbiAgICAgICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY2FudmFzLndpZHRoKjAuMTF9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC43ICwgeTogdGhpcy5jYW52YXMuaGVpZ2h0LW51bSB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC43fSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQqMC4zIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCowLjd9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiB0aGlzLmNhbnZhcy53aWR0aCAtIG51bSwgeTogdGhpcy5jYW52YXMuaGVpZ2h0KjAuNyB9OyB9KSBhcyBbUG9pbnRdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgIGNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyhzZW5zb3JzOlNlbnNvcltdKTpTZW5zb3JEaXN0YW5jZVtdIHtcbiAgICAgICAgY29uc3Qgd2FsbHNQb2ludHMgPSB0aGlzLndhbGxzLnJlZHVjZSggKHBydixjdXIpID0+IHBydi5jb25jYXQoY3VyKSxbXSApO1xuICAgICAgICBjb25zdCBzZW5zRGlzdCA9IHNlbnNvcnMubWFwKFxuICAgICAgICAgICAgc2Vuc29yID0+IFxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGQ6d2FsbHNQb2ludHMubWFwKFxuICAgICAgICAgICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDp3YWxsUG9pbnQueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXG4gICAgICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLmRpc3RhbmNlQmV0d2VlblJvYm90QW5kT2JzdGFjbGUoe3g6c2Vuc29yLngseTpzZW5zb3IueSx0aDpudWxsIH0sd2FsbFBvaW50KSAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHBydi5kIDwgY3VyLmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pWzBdPy5kLFxuICAgICAgICAgICAgICAgIHNpZGU6c2Vuc29yLnNpZGVcbiAgICAgICAgICAgICB9IGFzIFNlbnNvckRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gc2Vuc0Rpc3Q7XG4gICAgIH1cblxuICAgIGNhbGNEaXN0YW5jZXMoIHJvYm90UG9zaXRpb246UG9zaXRpb24pOlBvaW50W10ge1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscy5yZWR1Y2UoIChwcnYsY3VyKSA9PiBwcnYuY29uY2F0KGN1ciksW10gKS5tYXAoXG4gICAgICAgICAgICB3YWxsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OndhbGxQb2ludC54LFxuICAgICAgICAgICAgICAgIHk6d2FsbFBvaW50LnksXG4gICAgICAgICAgICAgICAgZDogdGhpcy5kaXN0YW5jZUJldHdlZW5Sb2JvdEFuZE9ic3RhY2xlKHJvYm90UG9zaXRpb24sd2FsbFBvaW50KSAgICAgIFxuICAgICAgICAgICAgICAgfSBhcyBQb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5zb3J0KCAocHJ2LGN1cikgPT4gIHtcbiAgICAgICAgICAgIGlmKCBwcnYuZCA8IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmKCBwcnYuZCA+IGN1ci5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzdGFuY2VCZXR3ZWVuUm9ib3RBbmRPYnN0YWNsZSggcm9ib3RQb3NpdGlvbjpQb3NpdGlvbixwb2ludDpQb2ludCl7XG4gICAgICAgICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3cocm9ib3RQb3NpdGlvbi54LXBvaW50LngsMikgKyBNYXRoLnBvdyhyb2JvdFBvc2l0aW9uLnktcG9pbnQueSwyKSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgLy8gdGhpcy5jYWxjRGlzdGFuY2VzKCk7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZm9yRWFjaCggcG9pbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHBvaW50KTtcbiAgICAgICAgfSApKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBsb3RDaXJjbGUocG9pbnQgOlBvaW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCBPYnN0YWNsZXMucldhbGwsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgIH1cblxuICAgIGNhbGNEaXN0YW5jZXNBc0pzb24oICk6Um9ib3RPYnN0YWNsZURpc3RhbmNlcyB7XG4gICAgICAgIGNvbnN0IHNlbnNvck9ic3REaXN0YW5jZXMgPSB0aGlzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyhSb2JvdC5nZXRTZW5zb3JzKCkpO1xuICAgICAgICBjb25zdCBmcm9udExlZnQgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkuZDtcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodCA9IHNlbnNvck9ic3REaXN0YW5jZXMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkuZDtcbiAgICAgICAgY29uc3QgYmFja0xlZnQgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KS5kO1xuICAgICAgICBjb25zdCBiYWNrUmlnaHQgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkuZDtcbiAgICAgICAgcmV0dXJuIHsgZnJvbnRMZWZ0LCBmcm9udFJpZ2h0LCBiYWNrTGVmdCwgYmFja1JpZ2h0IH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzdGFjbGVzKCk7IiwiaW1wb3J0IHsgUG9pbnQsIFNlbnNvckRpc3RhbmNlIH0gZnJvbSBcIi4vT2JzdGFjbGVzXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiwgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU2Vuc29yLCBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuXG5jbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cblxuICAgIGdldFJhbmdlT2ZBbmdsZXMoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzdGVwOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNYXRoLmNlaWwoTWF0aC5hYnMoKHRvIC0gZnJvbSkgLyBzdGVwKSkgfSwgKHgsIGkpID0+IGkpLm1hcChcbiAgICAgICAgICAgIGluZHggPT4gc3RlcCA+IDAgPyBmcm9tICsgaW5keCAqIHN0ZXAgOiB0byArIGluZHggKiBzdGVwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvd0Zyb250T2JzdGFjbGVQYXRoQXZvaWRhbmNlKHNlbnNvcnM6IFNlbnNvckRpc3RhbmNlW10sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZyb250TGVmdERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250TGVmdCkuZDtcbiAgICAgICAgY29uc3QgZnJvbnRSaWdodERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0RGlzdCA9IHNlbnNvcnMuZmluZChzZW5zID0+IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tSaWdodERpc3QgPSBzZW5zb3JzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmJhY2tSaWdodCkuZDtcblxuXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgZnJvbnRMZWZ0RGlzdDoke2Zyb250TGVmdERpc3R9YCwgMSwgMTApO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYGJhY2tMZWZ0RGlzdDoke2JhY2tMZWZ0RGlzdH1gLCAxLCAzMCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgZnJvbnRSaWdodERpc3Q6JHtmcm9udFJpZ2h0RGlzdH1gLCAxLCA1MCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgYmFja1JpZ2h0RGlzdDoke2JhY2tSaWdodERpc3R9YCwgMSwgNzApO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoYFRoZXRhOiR7cm9ib3RQb3NpdGlvbi50aH1gLCAxLCA5MCk7XG5cbiAgICAgICAgaWYgKGJhY2tMZWZ0RGlzdCA8PSAzKlJvYm90LnJvYm90QXR0ci5yVyAmJlxuICAgICAgICAgICAgYmFja1JpZ2h0RGlzdCA8PSAzKlJvYm90LnJvYm90QXR0ci5yVykge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKHJvYm90UG9zaXRpb24udGggPj0gLU1hdGguUEkqMTUvMTgwICYmIHJvYm90UG9zaXRpb24udGggPD0gTWF0aC5QSSoxNS8xODApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJjWCA9IHJvYm90UG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmNZID0gcm9ib3RQb3NpdGlvbi55ICsgMS41ICogUm9ib3Qucm9ib3RBdHRyLnJXO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSYW5nZU9mQW5nbGVzKE1hdGguUEkgLyAyLCAwLCAtMC4wMikuZm9yRWFjaChhbmdsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxvdENpcmNsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBhcmNYICsgMS41ICogUm9ib3Qucm9ib3RBdHRyLnJXICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogYXJjWSArIDEuNSAqIFJvYm90LnJvYm90QXR0ci5yVyAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQb2ludCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxvdENpcmNsZShwb2ludDogUG9pbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBhdGhHZW5lcmF0b3IoKTtcbiIsImltcG9ydCB7IFNwZWVkIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgU2Vuc29yLCBTb25hclNlbnNvcnMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgICB4OiBudW1iZXIsIC8vIHBvc2l0aW9uIGNvb3JkaW5hdGUgeFxuICAgIHk6IG51bWJlciwgLy8gcG9zaXRpb24gY29vcmRpbmF0ZSB5XG4gICAgdGg6IG51bWJlciAvLyB0aGV0YSBvcmllbnRhdGlvbiBvZiByb2JvdCBpbiAyIERpbWVudGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbHRhUG9zaXRpb24ge1xuICAgIGR4OiBudW1iZXIsIC8vIGRlbHRhIGNvb3JkaW5hdGUgeFxuICAgIGR5OiBudW1iZXIsIC8vIHNlbHRhIGNvb3JkaW5hdGUgeVxuICAgIGR0aDogbnVtYmVyIC8vIGRlbHRhIHRoZXRhIG9yaWVudGF0aW9uIG9mIHJvYm90IGluIDIgRGltZW50aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBSb2JvdCB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgcHJpdmF0ZSBzdG9wID0gZmFsc2U7XG4gICAgc3RhdGljIHJvYm90QXR0ciA9IHtcbiAgICAgICAgV2hlZWxSOiA1LFxuICAgICAgICBySDogNjAsXG4gICAgICAgIHJXOiAzMCxcbiAgICAgICAgclNMOiAyMCxcbiAgICAgICAgclNXOiAzXG4gICAgfTtcblxuICAgIHN0YXRpYyBSU0xDb3M0NSA9IE1hdGguY29zKE1hdGguUEkgLyA0KSAqIFJvYm90LnJvYm90QXR0ci5yU0w7XG5cbiAgICBkdCA9IDAuMDE7XG5cbiAgICBwb3NpdGlvbiA9IHsgeDogMTUwLCB5OiAxNTAsIHRoOjAgfSBhcyBQb3NpdGlvbjtcbiAgICBzcGVlZCA9IHsgcmlnaHQ6IDEwMCwgbGVmdDogMTAwIH0gYXMgU3BlZWQ7XG4gICAgZGVsdGEgPSB7ZHg6MCxkeTowLGR0aDowfSBhcyBEZWx0YVBvc2l0aW9uO1xuICAgIHNvbmFyU2Vuc29ycz1uZXcgU29uYXJTZW5zb3JzKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIHBsb3RDaXJjbGUocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBkZWZhdWx0Q29sb3I7XG4gICAgfVxuXG4gICAgcGxvdFJvYm90KHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgICAgICBsZXQgcHJldmlvdXNQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBjb25zdCBtb3ZlQW5kVHVybiA9IChkOiBudW1iZXIsIHRoOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueCArIGQgKiBNYXRoLmNvcyh0aCApO1xuICAgICAgICAgICAgY29uc3QgeUNvb3JkID0gcHJldmlvdXNQb3NpdGlvbi55ICsgZCAqIE1hdGguc2luKHRoKTtcbiAgICAgICAgICAgIHByZXZpb3VzUG9zaXRpb24gPSB7IHg6IHhDb29yZCwgeTogeUNvb3JkLCB0aCB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4Q29vcmQsIHlDb29yZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2Vuc0hvbGRlciA9IChhbmdsZTpudW1iZXIpID0+IHtcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wgLCBwb3NpdGlvbi50aCAtTWF0aC5QSS80K2FuZ2xlKTtcbiAgICAgICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIHBvc2l0aW9uLnRoK01hdGguUEkvNCArYW5nbGUpO1xuICAgICAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAsIHBvc2l0aW9uLnRoICszKk1hdGguUEkvNCthbmdsZSk7XG4gICAgICAgIH07IFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwcmV2aW91c1Bvc2l0aW9uLnggLCBwcmV2aW91c1Bvc2l0aW9uLnkgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLzIgLTIgLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xuICAgICAgICBzZW5zSG9sZGVyKCBNYXRoLlBJLzIgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJIICwgcG9zaXRpb24udGggKyBNYXRoLlBJICk7XG4gICAgICAgIHNlbnNIb2xkZXIoTWF0aC5QSSApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclcgLCBwb3NpdGlvbi50aCAtTWF0aC5QSS8yICk7XG4gICAgICAgIHNlbnNIb2xkZXIoLU1hdGguUEkvMiApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckggLCBwb3NpdGlvbi50aCApO1xuICAgICAgICBzZW5zSG9sZGVyKDAgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLzIgLCBwb3NpdGlvbi50aCArIE1hdGguUEkvMiApO1xuXG4gICAgICAgIG1vdmVBbmRUdXJuKDIsICBwb3NpdGlvbi50aCAgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgcG9zaXRpb24udGggKyBNYXRoLlBJLzIgKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oMiwgcG9zaXRpb24udGgrIE1hdGguUEkgKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG5cbiAgICB9XG5cbiAgICBrZWVwUm9ib3RJbldpbmRvd3MoKTp2b2lkIHtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54ID49IDk3MCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YS5keCA9ICAtdGhpcy5kZWx0YS5keCA7XG4gICAgICAgICAgICB0aGlzLmRlbHRhLmR0aCA9ICAtdGhpcy5kZWx0YS5kdGggO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ID49IDk3MCB8fCB0aGlzLnBvc2l0aW9uLnkgPD0gNSApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEuZHkgPSAgLXRoaXMuZGVsdGEuZHkgO1xuICAgICAgICAgICAgdGhpcy5kZWx0YS5kdGggPSAgLXRoaXMuZGVsdGEuZHRoIDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcGxvdFJvYm90Mihwb3NpdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHByZXZpb3VzUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgY29uc3QgbW92ZUFuZFR1cm4gPSAoZDogbnVtYmVyLCB0aDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4Q29vcmQgPSBwcmV2aW91c1Bvc2l0aW9uLnggKyBkICogTWF0aC5jb3ModGggKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgIGNvbnN0IHlDb29yZCA9IHByZXZpb3VzUG9zaXRpb24ueSArIGQgKiBNYXRoLnNpbih0aCAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAgICAgcHJldmlvdXNQb3NpdGlvbiA9IHsgeDogeENvb3JkLCB5OiB5Q29vcmQsIHRoIH07XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHhDb29yZCwgeUNvb3JkKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocHJldmlvdXNQb3NpdGlvbi54ICwgcHJldmlvdXNQb3NpdGlvbi55ICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5ySCAsIDkwICsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTE4MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCAtMTgwIC0gNDUgKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgLTQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybigoUm9ib3Qucm9ib3RBdHRyLnJXIC0gNCkgLyAyLCAgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oNCwgOTArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIDArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKDQsIC05MCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oKFJvYm90LnJvYm90QXR0ci5yVyAtIDQpIC8gMiwgMCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU1csIC00NSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCAtIDIsIDIyKyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuckgsIC05MCsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJTTCwgLTQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCAtMTM1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNMIC0gMiwgLTIyNSsgcG9zaXRpb24udGggKTtcbiAgICAgICAgbW92ZUFuZFR1cm4oUm9ib3Qucm9ib3RBdHRyLnJXLCAxODArIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC05MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICBtb3ZlQW5kVHVybihSb2JvdC5yb2JvdEF0dHIuclNXLCAtMTgwIC0gNDUrIHBvc2l0aW9uLnRoICk7XG4gICAgICAgIG1vdmVBbmRUdXJuKFJvYm90LnJvYm90QXR0ci5yU0wsIC0xODAgLSA5MCAtIDQ1KyBwb3NpdGlvbi50aCApO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG5cbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpOiBQb3NpdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uOlBvc2l0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRTcGVlZCgpOiBTcGVlZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGFuaW1hdGUoc3BlZWQ6IFNwZWVkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5jYWxjTmV3UG9zaXRpb24oc3BlZWQpO1xuICAgICAgICB0aGlzLnBsb3RSb2JvdCh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zb25hclNlbnNvcnMuc2hvdyh0aGlzLnBvc2l0aW9uKTtcblxuICAgIH1cblxuICAgIGNhbGNOZXdQb3NpdGlvbihzcGVlZDogU3BlZWQpIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMuc3RvcD8geyBkeDogMCwgZHk6IDAsIGR0aDogMCB9OiB0aGlzLmtpbmVtYXRpYyhzcGVlZC5sZWZ0LCBzcGVlZC5yaWdodCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLmRlbHRhLmR4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5kZWx0YS5keTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCArPSB0aGlzLmRlbHRhLmR0aDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCAlPSAyKk1hdGguUEk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udGggPSB0aGlzLnBvc2l0aW9uLnRoID4gTWF0aC5QSSA/ICgtMipNYXRoLlBJICt0aGlzLnBvc2l0aW9uLnRoKSA6IHRoaXMucG9zaXRpb24udGg7XG4gICAgfVxuXG4gICAga2luZW1hdGljKGxlZnRXZWVsU3BlZWQ6IG51bWJlciwgcmlnaHRXaGVlbFNwZWVkOiBudW1iZXIpOiB7IGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIGR0aDogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBsaW5lYXJWZWxvY2l0eSA9IChyaWdodFdoZWVsU3BlZWQgKyBsZWZ0V2VlbFNwZWVkKSAvIDI7XG4gICAgICAgIGNvbnN0IGFuZ3VsYXJWZWxvY2l0eSA9IGxlZnRXZWVsU3BlZWQtcmlnaHRXaGVlbFNwZWVkO1xuICAgICAgICBjb25zdCBkdGggPWFuZ3VsYXJWZWxvY2l0eSAqIHRoaXMuZHQgKjIqIE1hdGguUEkqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvIFJvYm90LnJvYm90QXR0ci5yVztcbiAgICAgICAgLy8gY29uc3QgdGhldGEgPSB0aGlzLnBvc2l0aW9uLnRoICsgZHRoO1xuICAgICAgICBjb25zdCBkeCA9bGluZWFyVmVsb2NpdHkgKiBNYXRoLmNvcyh0aGlzLnBvc2l0aW9uLnRoKSAqIHRoaXMuZHQgKiBSb2JvdC5yb2JvdEF0dHIuV2hlZWxSLzI7XG4gICAgICAgIGNvbnN0IGR5ID1saW5lYXJWZWxvY2l0eSAqIE1hdGguc2luKHRoaXMucG9zaXRpb24udGgpICogdGhpcy5kdCAqIFJvYm90LnJvYm90QXR0ci5XaGVlbFIvMjtcblxuICAgICAgICByZXR1cm4geyBkeCwgZHksIGR0aCB9O1xuICAgIH1cblxuICAgIGdldFNlbnNvcnMoKTpBcnJheTxTZW5zb3I+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29uYXJTZW5zb3JzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHRoaXMuZ2V0UG9zaXRpb24oKSk7XG4gICAgfVxuXG4gICAgc2V0WCh4Om51bWJlcikgOnZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xuICAgIH1cblxuICAgIHNldFkoeTpudW1iZXIpIDp2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0geTtcbiAgICB9XG5cbiAgICBzZXRUaCh0aDpudW1iZXIpIDp2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aCA9IHRoO1xuICAgIH1cblxuICAgIHRvZ2dsZVN0b3AoKXtcbiAgICAgICAgdGhpcy5zdG9wID0gIXRoaXMuc3RvcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb2JvdCgpO1xuIiwiaW1wb3J0IHsgUG9pbnQsIFBvaW50TWluaW11bSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZW5zb3IgZXh0ZW5kcyBQb2ludCB7XG4gICAgc2lkZTogc3RyaW5nLFxuICAgIGRjOiBudW1iZXIgLy8gZGlzdGFuY2UgZnJvbSBjZW50ZXJcbn1cblxuXG5cbmV4cG9ydCBlbnVtIFNpZGVzIHtcbiAgICBmcm9udExlZnQgPSBcImZyb250TGVmdFwiLFxuICAgIGZyb250UmlnaHQgPSBcImZyb250UmlnaHRcIixcbiAgICBiYWNrTGVmdCA9IFwiYmFja0xlZnRcIixcbiAgICBiYWNrUmlnaHQgPSBcImJhY2tSaWdodFwiLFxuICAgIG1pZGRsZSA9IFwibWlkZGxlXCIsXG4gICAgY2VudGVyID0gXCJjZW50ZXJcIlxufVxuXG5leHBvcnQgY2xhc3MgU29uYXJTZW5zb3JzIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG5cbiAgICBjYWxEaXN0KHBvaW50MTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBwb2ludDI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50MS54IC0gcG9pbnQyLngsIDIpICsgTWF0aC5wb3cocG9pbnQxLnkgLSBwb2ludDIueSwgMikpO1xuICAgIH1cblxuICAgIGNhbEFuZ2xlKHBvaW50MTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9LCBwb2ludDI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKChwb2ludDIueSAtIHBvaW50MS55KS8ocG9pbnQyLnggLSBwb2ludDEueCkpO1xuICAgIH1cblxuICAgIGNhbGNTZW5zb3JzUG9zaXRpb25zKHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogQXJyYXk8U2Vuc29yPiB7XG4gICAgICAgIHJldHVybiBbU2lkZXMuZnJvbnRMZWZ0LCBTaWRlcy5mcm9udFJpZ2h0LCBTaWRlcy5iYWNrTGVmdCwgU2lkZXMuYmFja1JpZ2h0LCBTaWRlcy5taWRkbGUsIFNpZGVzLmNlbnRlcl1cbiAgICAgICAgICAgIC5tYXAoc2Vuc29yU2lkZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmNlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZSxcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTZW5zb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZW5zb3JTaWRlID09PSBTaWRlcy5taWRkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHJvYm90UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHJvYm90UG9zaXRpb24ueSArIFJvYm90LnJvYm90QXR0ci5ySCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBSb2JvdC5SU0xDb3M0NSAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuZnJvbnRSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcm9ib3RQb3NpdGlvbi54ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuclcgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbnNvclNpZGUgPT09IFNpZGVzLmJhY2tMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggLSBSb2JvdC5SU0xDb3M0NSAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55IC0gUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuckggKyBSb2JvdC5yb2JvdEF0dHIuclcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlOiBzZW5zb3JTaWRlXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU2Vuc29yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Vuc29yU2lkZSA9PT0gU2lkZXMuYmFja1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByb2JvdFBvc2l0aW9uLnggKyBSb2JvdC5SU0xDb3M0NSArIFJvYm90LnJvYm90QXR0ci5yVyAtIFJvYm90LnJvYm90QXR0ci5yVyAvIDIgLSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcm9ib3RQb3NpdGlvbi55ICsgUm9ib3QuUlNMQ29zNDUgKyBSb2JvdC5yb2JvdEF0dHIuckggKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZTogc2Vuc29yU2lkZVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNlbnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkubWFwKHNlbnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbnNDYWxjID0gc2VucztcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy5kYyA9IHRoaXMuY2FsRGlzdChyb2JvdFBvc2l0aW9uLCBzZW5zQ2FsYyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmNhbEFuZ2xlKHJvYm90UG9zaXRpb24sIHNlbnNDYWxjKSArXG4gICAgICAgICAgICAgICAgKHNlbnMuc2lkZSA9PT0gU2lkZXMuZnJvbnRMZWZ0IHx8IHNlbnMuc2lkZSA9PT0gU2lkZXMuYmFja0xlZnQgPyBNYXRoLlBJIDogMCkgK1xuICAgICAgICAgICAgICAgIHJvYm90UG9zaXRpb24udGggICsgTWF0aC5QSS8yIDtcbiAgICAgICAgICAgICAgICBzZW5zQ2FsYy54ID0gcm9ib3RQb3NpdGlvbi54ICsgc2Vuc0NhbGMuZGMgKiBNYXRoLmNvcyhhbmdsZSApO1xuICAgICAgICAgICAgICAgIHNlbnNDYWxjLnkgPSByb2JvdFBvc2l0aW9uLnkgKyBzZW5zQ2FsYy5kYyAqIE1hdGguc2luKGFuZ2xlICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbnNDYWxjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93KHJvYm90UG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XG4gICAgICAgIGNvbnN0IHNlbnNvcnMgPSB0aGlzLmNhbGNTZW5zb3JzUG9zaXRpb25zKHJvYm90UG9zaXRpb24pO1xuXG4gICAgICAgIHNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHsgeDogc2Vuc29yLngsIHk6IHNlbnNvci55LCB0aDogcm9ib3RQb3NpdGlvbi50aCB9KTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgcGxvdENpcmNsZShwb2lzdGlvbjogUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyB0aGlzLmNvbnRleHQucm90YXRlKHBvaXN0aW9uLnRoKk1hdGguUEkvMTgwKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwib3JhbmdlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMocG9pc3Rpb24ueCwgcG9pc3Rpb24ueSwgMywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBkZWZhdWx0Q29sb3I7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7IFBvaW50LCBTZW5zb3JEaXN0YW5jZSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24sIFJvYm90IH0gZnJvbSBcIi4vUm9ib3RcIjtcbmltcG9ydCB7ICBTaWRlcyB9IGZyb20gXCIuL1NvbmFyU2Vuc29yc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIxIGZyb20gXCIuL1NwZWVkQ29udHJvbGxlcjFcIjtcbmltcG9ydCBjb250cm9sbGVyMiBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXIyXCI7XG5pbXBvcnQgU3BlZWRDb250cm9sbGVyMyBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXIzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlZWQge1xuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBTcGVlZENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBNYXhTcGVlZCA9IDcwMDtcbiAgICBzdGF0aWMgTWF4RGlzdGFuY2UgPSA4MDtcbiAgICBpdGVyYXRpb24gPSAwO1xuXG4gICAgbGFzdERpc3RhbmNlVG9PYnN0YWNsZXM6IFNlbnNvckRpc3RhbmNlW107XG4gICBcbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBTcGVlZCB7XG4gICAgICAgIHJldHVybiBTcGVlZENvbnRyb2xsZXIzLmNhbGNXaGVlbHNTcGVlZChzZW5zb3JPYnN0RGlzdGFuY2VzLGN1cnJlbnRTcGVlZCxyb2JvdFBvc2l0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzLCBTZW5zb3JEaXN0YW5jZSB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU2lkZXMgfSBmcm9tIFwiLi9Tb25hclNlbnNvcnNcIjtcbmltcG9ydCB7IFNwZWVkLCBTcGVlZENvbnRyb2xsZXIgfSBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJcIjtcbmltcG9ydCBTcGVlZENvbnRyb2xsZXJJZiBmcm9tIFwiLi9TcGVlZENvbnRyb2xsZXJJZlwiO1xuaW1wb3J0IFRhcmdldCBmcm9tIFwiLi9UYXJnZXRcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgU3BlZWRDb250cm9sbGVyMyBpbXBsZW1lbnRzIFNwZWVkQ29udHJvbGxlciB7XG5cbiAgICBzdGF0aWMgTWF4U3BlZWQgPSA3MDA7XG4gICAgc3RhdGljIE1heERpc3RhbmNlID0gODA7XG5cbiAgICBpdGVyYXRpb24gPSAwO1xuICAgIGxhc3REaXN0YW5jZVRvT2JzdGFjbGVzOiBTZW5zb3JEaXN0YW5jZVtdO1xuXG5cbiAgICB3cmFwMlBpKGFuZzpudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGFuZyA+IE1hdGguUEkgPyAoLTIqTWF0aC5QSSArYW5nKSA6IGFuZztcbiAgICB9XG5cbiAgICBjYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbjogUG9zaXRpb24sIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54LCAyKSArIE1hdGgucG93KHRhcmdldFBvc2l0aW9uLnkgLSByb2JvdFBvc2l0aW9uLnksIDIpKTtcbiAgICB9XG5cbiAgICBjYWxjV2hlZWxzU3BlZWQoc2Vuc29yT2JzdERpc3RhbmNlczogU2Vuc29yRGlzdGFuY2VbXSwgY3VycmVudFNwZWVkOiBTcGVlZCwgcm9ib3RQb3NpdGlvbjogUG9zaXRpb24pOiBTcGVlZCB7XG4gICAgICAgIC8vY29uc3Qgb2JzdGFjbGVEaXN0ID0gdGhpcy5nZXRPYnN0YWNsZURpc3Qoc2Vuc29yT2JzdERpc3RhbmNlcyk7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gVGFyZ2V0LmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldERpc3RhbmNlID0gdGhpcy5jYWxEaXN0MlRhcmdldCh0YXJnZXRQb3NpdGlvbiwgcm9ib3RQb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgbGluZWFyU3BlZWQgPSB0YXJnZXREaXN0YW5jZTtcbiAgICAgICAgY29uc3QgYW5ndWxhclNwZWVkID0gMC4wMiogTWF0aC5hdGFuMigodGFyZ2V0UG9zaXRpb24ueSAtIHJvYm90UG9zaXRpb24ueSksICh0YXJnZXRQb3NpdGlvbi54IC0gcm9ib3RQb3NpdGlvbi54KSkgO1xuXG4gICAgICAgIHJldHVybiB7IHJpZ2h0OiBsaW5lYXJTcGVlZCAqIE1hdGguY29zKGFuZ3VsYXJTcGVlZCksIGxlZnQ6IGxpbmVhclNwZWVkICogTWF0aC5zaW4oYW5ndWxhclNwZWVkKSB9O1xuXG4gICAgfVxuXG5cbiAgICBjYWxjV2hlZWxzU3BlZWQyKHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10sIGN1cnJlbnRTcGVlZDogU3BlZWQsIHJvYm90UG9zaXRpb246IFBvc2l0aW9uKTogU3BlZWQge1xuICAgICAgICBjb25zdCBvYnN0YWNsZURpc3QgPSB0aGlzLmdldE9ic3RhY2xlRGlzdChzZW5zb3JPYnN0RGlzdGFuY2VzKTtcblxuICAgICAgICBsZXQgY2FsY1NwZWVkOiBTcGVlZCA9IHsgbGVmdDogU3BlZWRDb250cm9sbGVyLk1heFNwZWVkIC8gNCwgcmlnaHQ6IFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAvIDQgfTtcblxuICAgICAgICBjYWxjU3BlZWQubGVmdCAgKz0gMC4wMSAqIFNwZWVkQ29udHJvbGxlci5NYXhTcGVlZCAqIHRoaXMuZ2V0TGVmdFB1bHNlT2JzdGFjbGUob2JzdGFjbGVEaXN0KSArIDAuMDEgKiBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgKiB0aGlzLmdldExGcm9udFB1bHNlT2JzdGFjbGUob2JzdGFjbGVEaXN0KTtcbiAgICAgICAgY2FsY1NwZWVkLnJpZ2h0ICs9IDAuMDEgKiBTcGVlZENvbnRyb2xsZXIuTWF4U3BlZWQgKiB0aGlzLmdldFJpZ2h0UHVsc2VPYnN0YWNsZShvYnN0YWNsZURpc3QpIDtcblxuICAgICAgICByZXR1cm4gY2FsY1NwZWVkO1xuXG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0T2JzdGFjbGVEaXN0KHNlbnNvck9ic3REaXN0YW5jZXM6IFNlbnNvckRpc3RhbmNlW10pOiBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzIHtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5mcm9udExlZnQpLmQ7XG4gICAgICAgIGNvbnN0IGZyb250UmlnaHQgPSBzZW5zb3JPYnN0RGlzdGFuY2VzLmZpbmQoc2VucyA9PiBzZW5zLnNpZGUgPT09IFNpZGVzLmZyb250UmlnaHQpLmQ7XG4gICAgICAgIGNvbnN0IGJhY2tMZWZ0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrTGVmdCkuZDtcbiAgICAgICAgY29uc3QgYmFja1JpZ2h0ID0gc2Vuc29yT2JzdERpc3RhbmNlcy5maW5kKHNlbnMgPT4gc2Vucy5zaWRlID09PSBTaWRlcy5iYWNrUmlnaHQpLmQ7XG4gICAgICAgIHJldHVybiB7IGZyb250TGVmdCwgZnJvbnRSaWdodCwgYmFja0xlZnQsIGJhY2tSaWdodCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmlnaHRQdWxzZU9ic3RhY2xlKG9ic3RhY2xlczogUm9ib3RPYnN0YWNsZURpc3RhbmNlcyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuZnJvbnRSaWdodCkgKyB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuYmFja1JpZ2h0KSA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMZWZ0UHVsc2VPYnN0YWNsZShvYnN0YWNsZXM6IFJvYm90T2JzdGFjbGVEaXN0YW5jZXMpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjUHVsc2Uob2JzdGFjbGVzLmZyb250TGVmdCkgKyB0aGlzLmNhbGNQdWxzZShvYnN0YWNsZXMuYmFja0xlZnQpIDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExGcm9udFB1bHNlT2JzdGFjbGUob2JzdGFjbGVzOiBSb2JvdE9ic3RhY2xlRGlzdGFuY2VzKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY1B1bHNlKG9ic3RhY2xlcy5mcm9udExlZnQpICogdGhpcy5jYWxjUHVsc2Uob2JzdGFjbGVzLmZyb250UmlnaHQpIDtcbiAgICB9XG5cbiAgICBjYWxjUHVsc2UyKGRpc3Q6bnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZXhwKC0wLjEgKiBNYXRoLnBvdygoKGRpc3QgLSBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpIC8gU3BlZWRDb250cm9sbGVyLk1heERpc3RhbmNlKSwgMikpO1xuICAgIH1cblxuICAgIGNhbGNQdWxzZTMoZGlzdDpudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0aCA9IGRpc3QgPCBTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UgXG4gICAgICAgID8gTWF0aC5hYnMoZGlzdC9TcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2UpXG4gICAgICAgIDogMS8yO1xuICAgICAgICByZXR1cm4gMC41KigxK01hdGguY29zKE1hdGguUEkqdGgpKTtcbiAgICB9XG5cbiAgICBjYWxjUHVsc2UoZGlzdDpudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGlzdDxTcGVlZENvbnRyb2xsZXIuTWF4RGlzdGFuY2U/IDEvKDErTWF0aC5leHAoLU1hdGguYWJzKGRpc3QpKSk6MDtcbiAgICB9XG59KTsiLCJpbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1JvYm90XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAoY2xhc3MgVGFyZ2V0IHtcbiAgXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgcHJpdmF0ZSB0YXJnZXQgPSB7eDo0OTAseTo0OTAsIHRoOjAgfSBhcyBQb3NpdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cblxuICAgIHNob3dUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh0aGlzLnRhcmdldC54LCB0aGlzLnRhcmdldC55LCAzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGRlZmF1bHRDb2xvcjtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpOlBvc2l0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICAgIH1cbn0pOyIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IFBhdGhHZW5lcmF0b3IgZnJvbSBcIi4vUGF0aEdlbmVyYXRvclwiO1xuaW1wb3J0IHsgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xuaW1wb3J0IHsgU3BlZWRDb250cm9sbGVyIH0gZnJvbSBcIi4vU3BlZWRDb250cm9sbGVyXCI7XG5pbXBvcnQgdGFyZ2V0IGZyb20gXCIuL1RhcmdldFwiO1xuXG5leHBvcnQgY2xhc3MgV29ybGQge1xuICByb2JvdCA9IG5ldyBSb2JvdCgpO1xuICBvYnN0YWNsZXMgPSBuZXcgT2JzdGFjbGVzKCk7XG4gIGNvbnJvbGxlciA9IG5ldyBTcGVlZENvbnRyb2xsZXIoKTtcblxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXModGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcbiAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xuXG4gICAgY29uc3Qgc3BlZWQgPSB0aGlzLmNvbnJvbGxlci5jYWxjV2hlZWxzU3BlZWQoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFNwZWVkKCksdGhpcy5yb2JvdC5nZXRQb3NpdGlvbigpKTtcbiAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgICBQYXRoR2VuZXJhdG9yLnNob3dGcm9udE9ic3RhY2xlUGF0aEF2b2lkYW5jZShzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgdGFyZ2V0LnNob3dUYXJnZXQoKTtcblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHRoaXMuYW5pbWF0ZSgpIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBzd2l0Y2ggKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTYwLCBsZWZ0OiAxNTAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImxlZnRcIjoge1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoeyByaWdodDogMTUwLCBsZWZ0OiAxNjAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwiZm9yd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAxNjAsIGxlZnQ6IDE2MCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJiYWNrd2FyZFwiOiB7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZSh7IHJpZ2h0OiAtMTYwLCBsZWZ0OiAtMTYwIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInN0b3BcIjoge1xuICAgICAgICB0aGlzLnJvYm90LnRvZ2dsZVN0b3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJzdGVwXCI6IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzKHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHNlbnNvckRpc3RhbmNlcyA9IHRoaXMub2JzdGFjbGVzLmNhbGNEaXN0YW5jZXNGcm9tU2Vuc29ycyh0aGlzLnJvYm90LmdldFNlbnNvcnMoKSk7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5jb25yb2xsZXIuY2FsY1doZWVsc1NwZWVkKHNlbnNvckRpc3RhbmNlcywgdGhpcy5yb2JvdC5nZXRTcGVlZCgpLHRoaXMucm9ib3QuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMucm9ib3QuYW5pbWF0ZShzcGVlZCk7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcbiAgICAgICAgUGF0aEdlbmVyYXRvci5zaG93RnJvbnRPYnN0YWNsZVBhdGhBdm9pZGFuY2Uoc2Vuc29yRGlzdGFuY2VzLCB0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInN0YXJ0XCI6IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5vYnN0YWNsZXMuY2FsY0Rpc3RhbmNlcyh0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zdCBzZW5zb3JEaXN0YW5jZXMgPSB0aGlzLm9ic3RhY2xlcy5jYWxjRGlzdGFuY2VzRnJvbVNlbnNvcnModGhpcy5yb2JvdC5nZXRTZW5zb3JzKCkpO1xuICAgICAgICBjb25zdCBzcGVlZCA9IHRoaXMuY29ucm9sbGVyLmNhbGNXaGVlbHNTcGVlZChzZW5zb3JEaXN0YW5jZXMsIHRoaXMucm9ib3QuZ2V0U3BlZWQoKSx0aGlzLnJvYm90LmdldFBvc2l0aW9uKCkpO1xuICAgICAgICB0aGlzLnJvYm90LmFuaW1hdGUoc3BlZWQpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcy5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwieFwiOntcbiAgICAgICAgdGhpcy5yb2JvdC5zZXRYKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ5XCI6e1xuICAgICAgICB0aGlzLnJvYm90LnNldFkoIHBhcnNlRmxvYXQoIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTpzdHJpbmd9KS52YWx1ZSApICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInRoXCI6e1xuICAgICAgICB0aGlzLnJvYm90LnNldFRoKCBwYXJzZUZsb2F0KCAoZXZlbnQuY3VycmVudFRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6c3RyaW5nfSkudmFsdWUgKSAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICAgIHRoaXMub2JzdGFjbGVzLnNob3coKTtcblxuICB9XG59IiwiXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gXCIuL1dvcmxkXCI7XG5cbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XG5cbltcInJpZ2h0XCIsIFwibGVmdFwiLCBcImZvcndhcmRcIiwgXCJiYWNrd2FyZFwiLCBcInN0ZXBcIiwgXCJzdG9wXCJdLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b24pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XG4gICAgfSk7XG59XG4pO1xuXG5bXCJ4XCIsXCJ5XCIsXCJ0aFwiXS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgIHdvcmxkLmhhbmRsZUV2ZW50KGV2ZW50IGFzIFBvaW50ZXJFdmVudCk7XG4gICAgfSk7XG59KTtcblxud29ybGQuYW5pbWF0ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==