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
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: 0, y: num, r: Obstacles.rWall }; }),
            Array.from({ length: this.canvas.height }, function (_, key) { return key; }).map(function (num) { return { x: _this.canvas.width, y: num, r: Obstacles.rWall }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height, r: Obstacles.rWall }; }),
            Array.from({ length: this.canvas.width }, function (_, key) { return key; }).map(function (num) { return { x: num, y: 0, r: Obstacles.rWall }; }),
            Array.from({ length: this.canvas.width * 0.5 }, function (_, key) { return key; }).map(function (num) { return { x: num, y: _this.canvas.height * 0.5, r: Obstacles.rWall }; })
        ];
    };
    Obstacles.prototype.show = function () {
        var _this = this;
        this.walls.forEach(function (wall) { return wall.forEach(function (point) {
            _this.plotCircle(point);
        }); });
    };
    Obstacles.prototype.plotCircle = function (point) {
        this.context.beginPath();
        this.context.arc(point.x, point.y, point.r, 0, Math.PI * 2, true);
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
var Robot = /** @class */ (function () {
    function Robot() {
        this.counter = 0;
        this.robotAttr = {
            width: 50,
            height: 50,
            wheelH: 10,
            WheelW: 5,
            WheelR: 5,
        };
        this.dt = 0.002;
        this.position = { x: 130, y: 145, theta: Math.PI / 2 };
        this.speed = { vRight: 100, vLeft: 100 };
        this.canvas = document.getElementById('canvas');
        addEventListener('click', function (event) {
        });
        this.context = this.canvas.getContext("2d");
        // this.plotRobot(268, 234);
    }
    Robot.prototype.plotCircle = function (x, y, theta) {
        if (x === void 0) { x = 25; }
        if (y === void 0) { y = 25; }
        if (theta === void 0) { theta = 30; }
        this.context.beginPath();
        this.context.arc(x, y, 15, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    };
    Robot.prototype.plotRobot = function (x, y, theta) {
        if (x === void 0) { x = 25; }
        if (y === void 0) { y = 25; }
        if (theta === void 0) { theta = 30; }
        this.context.translate(x, y);
        this.context.rotate(theta);
        this.context.fillStyle = "#0095DD";
        this.context.fillRect(0, 0, this.robotAttr.height, this.robotAttr.width);
        this.context.fillStyle = "#FFCC99";
        this.context.fillRect(this.robotAttr.width + this.robotAttr.WheelW - 8, this.robotAttr.height - this.robotAttr.wheelH + 3, 12, 4);
        this.context.fillRect(-this.robotAttr.wheelH + 2, this.robotAttr.height - this.robotAttr.wheelH + 3, 12, 4);
        this.context.fillStyle = "#B252C3";
        this.context.fillRect(-this.robotAttr.wheelH, this.robotAttr.height - this.robotAttr.wheelH, this.robotAttr.WheelW, this.robotAttr.wheelH);
        this.context.fillRect(this.robotAttr.width + this.robotAttr.WheelW, this.robotAttr.height - this.robotAttr.wheelH, this.robotAttr.WheelW, this.robotAttr.wheelH);
    };
    Robot.prototype.animate = function () {
        var _this = this;
        if (this.position.x >= (this.canvas.width - 50) ||
            this.position.y >= (this.canvas.height - 50)) {
            this.speed.vLeft *= -1;
            this.speed.vRight *= -1;
        }
        var delta = this.kinematic(this.speed.vLeft, this.speed.vRight);
        this.position.x += delta.dx;
        this.position.y += delta.dy;
        this.position.theta += delta.dth;
        if (this.counter % 1 === 0) {
            this.context.clearRect(0, 0, 788, 899);
            // this.plotRobot(this.position.x, this.position.y, this.position.theta);
            this.plotCircle(this.position.x, this.position.y, this.position.theta);
        }
        this.counter += 1;
        window.requestAnimationFrame(function () { _this.animate(); });
    };
    Robot.prototype.kinematic = function (leftWeelSpeed, rightWheelSpeed) {
        var dth = (0.5 * this.robotAttr.WheelR / this.robotAttr.width) * (-rightWheelSpeed + leftWeelSpeed) * this.dt;
        var theta = this.position.theta + dth;
        var dx = this.robotAttr.WheelR * 0.5 * Math.cos(theta) * (rightWheelSpeed + leftWeelSpeed) * this.dt;
        var dy = this.robotAttr.WheelR * 0.5 * Math.sin(theta) * (rightWheelSpeed + leftWeelSpeed) * this.dt;
        return { dx: dx, dy: dy, dth: dth };
    };
    return Robot;
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


var World = /** @class */ (function () {
    function World() {
        this.robot = new _Robot__WEBPACK_IMPORTED_MODULE_1__["Robot"]();
        this.obstacles = new _Obstacles__WEBPACK_IMPORTED_MODULE_0__["Obstacles"]();
    }
    World.prototype.animate = function () {
        this.obstacles.show();
        //  this.robot.animate();       
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL09ic3RhY2xlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUm9ib3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtJQU9JO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUNyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1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QUM7UUFDaEgsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdkcsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUV2RyxPQUFPLEVBQUUsRUFBRSxNQUFFLEVBQUUsTUFBRSxHQUFHLE9BQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ1I7QUFFaEM7SUFBQTtRQUNJLFVBQUssR0FBRSxJQUFJLDRDQUFLLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUUsSUFBSSxvREFBUyxFQUFFLENBQUM7SUFNL0IsQ0FBQztJQUpHLHVCQUFPLEdBQVA7UUFDRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLGdDQUFnQztJQUNqQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFnQztBQUVoQyxJQUFNLEtBQUssR0FBRyxJQUFJLDRDQUFLLEVBQUUsQ0FBQztBQUMxQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHI6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgT2JzdGFjbGVzIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICB3YWxsczogQXJyYXk8QXJyYXk8UG9pbnQ+PjtcbiAgICBvYnN0YWNsZXM6IEFycmF5PFBvaW50PjtcbiAgICBzdGF0aWMgcldhbGwgPSAzO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU9ic3RhY2xlcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlT2JzdGFjbGVzKCkge1xuICAgICAgICB0aGlzLndhbGxzID0gW1xuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IDAsIHk6IG51bSxyOiBPYnN0YWNsZXMucldhbGx9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sIChfLCBrZXkpID0+IGtleSkubWFwKG51bSA9PiB7IHJldHVybiB7IHg6IHRoaXMuY2FudmFzLndpZHRoLCB5OiBudW0scjogT2JzdGFjbGVzLnJXYWxsIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiB0aGlzLmNhbnZhcy5oZWlnaHQscjogT2JzdGFjbGVzLnJXYWxsIH07IH0pIGFzIFtQb2ludF0sXG4gICAgICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNhbnZhcy53aWR0aCAgfSwgKF8sIGtleSkgPT4ga2V5KS5tYXAobnVtID0+IHsgcmV0dXJuIHsgeDogbnVtLCB5OiAwLHI6IE9ic3RhY2xlcy5yV2FsbCB9OyB9KSBhcyBbUG9pbnRdLFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jYW52YXMud2lkdGgqMC41ICB9LCAoXywga2V5KSA9PiBrZXkpLm1hcChudW0gPT4geyByZXR1cm4geyB4OiBudW0sIHk6IHRoaXMuY2FudmFzLmhlaWdodCowLjUscjogT2JzdGFjbGVzLnJXYWxsIH07IH0pIGFzIFtQb2ludF1cblxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZm9yRWFjaCggcG9pbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHBvaW50KTtcbiAgICAgICAgfSApKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHBsb3RDaXJjbGUocG9pbnQgOlBvaW50KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCBwb2ludC5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoXCJIZWxsbyBXb3JsZFwiLCAxMCwgNTApO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBSb2JvdCB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgY291bnRlciA9IDA7XG5cbiAgICByb2JvdEF0dHIgPSB7XG4gICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgd2hlZWxIOiAxMCxcbiAgICAgICAgV2hlZWxXOiA1LFxuICAgICAgICBXaGVlbFI6IDUsXG4gICAgfTtcbiAgICBkdCA9IDAuMDAyO1xuICAgIHBvc2l0aW9uID0geyB4OiAxMzAsIHk6IDE0NSwgdGhldGE6IE1hdGguUEkgLyAyIH07XG4gICAgc3BlZWQgPXt2UmlnaHQ6MTAwLCB2TGVmdDoxMDB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAvLyB0aGlzLnBsb3RSb2JvdCgyNjgsIDIzNCk7XG4gICAgfVxuXG4gICAgcGxvdENpcmNsZSh4ID0gMjUsIHkgPSAyNSwgdGhldGEgPSAzMCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgMTUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG4gICAgfVxuXG4gICAgcGxvdFJvYm90KHggPSAyNSwgeSA9IDI1LCB0aGV0YSA9IDMwKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUodGhldGEpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnJvYm90QXR0ci5oZWlnaHQsIHRoaXMucm9ib3RBdHRyLndpZHRoKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZDQzk5XCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLnJvYm90QXR0ci53aWR0aCArIHRoaXMucm9ib3RBdHRyLldoZWVsVyAtIDgsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci5oZWlnaHQgLSB0aGlzLnJvYm90QXR0ci53aGVlbEggKyAzLFxuICAgICAgICAgICAgMTIsXG4gICAgICAgICAgICA0KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLSB0aGlzLnJvYm90QXR0ci53aGVlbEggKyAyLFxuICAgICAgICAgICAgdGhpcy5yb2JvdEF0dHIuaGVpZ2h0IC0gdGhpcy5yb2JvdEF0dHIud2hlZWxIICsgMyxcbiAgICAgICAgICAgIDEyLFxuICAgICAgICAgICAgNCk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI0IyNTJDM1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoLSB0aGlzLnJvYm90QXR0ci53aGVlbEgsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci5oZWlnaHQgLSB0aGlzLnJvYm90QXR0ci53aGVlbEgsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci5XaGVlbFcsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci53aGVlbEgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QodGhpcy5yb2JvdEF0dHIud2lkdGggKyB0aGlzLnJvYm90QXR0ci5XaGVlbFcsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci5oZWlnaHQgLSB0aGlzLnJvYm90QXR0ci53aGVlbEgsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci5XaGVlbFcsXG4gICAgICAgICAgICB0aGlzLnJvYm90QXR0ci53aGVlbEgpO1xuXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpOiB2b2lkIHtcbiAgIFxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPj0gKHRoaXMuY2FudmFzLndpZHRoICAtIDUwKSB8fFxuICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPj0gKHRoaXMuY2FudmFzLmhlaWdodCAtIDUwKSkge1xuICAgICAgICAgICAgIHRoaXMuc3BlZWQudkxlZnQgKj0gLTE7XG4gICAgICAgICAgICAgdGhpcy5zcGVlZC52UmlnaHQgKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWx0YSA9IHRoaXMua2luZW1hdGljKCB0aGlzLnNwZWVkLnZMZWZ0ICwgIHRoaXMuc3BlZWQudlJpZ2h0KTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZGVsdGEuZHg7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkZWx0YS5keTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50aGV0YSArPSBkZWx0YS5kdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciAlIDEgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNzg4LCA4OTkpO1xuICAgICAgICAgICAgLy8gdGhpcy5wbG90Um9ib3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucG9zaXRpb24udGhldGEpO1xuICAgICAgICAgICAgdGhpcy5wbG90Q2lyY2xlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLnRoZXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyB0aGlzLmFuaW1hdGUoKSB9KTtcbiAgICB9XG5cbiAgICBraW5lbWF0aWMobGVmdFdlZWxTcGVlZDogbnVtYmVyLCByaWdodFdoZWVsU3BlZWQ6IG51bWJlcik6IHsgZHg6IG51bWJlciwgZHk6IG51bWJlciwgZHRoOiBudW1iZXIgfSB7XG4gICAgICAgIGNvbnN0IGR0aCA9ICgwLjUgKiB0aGlzLnJvYm90QXR0ci5XaGVlbFIgLyB0aGlzLnJvYm90QXR0ci53aWR0aCkgKiAoLXJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpICogdGhpcy5kdDtcbiAgICAgICAgY29uc3QgdGhldGEgPSB0aGlzLnBvc2l0aW9uLnRoZXRhICsgZHRoO1xuICAgICAgICBjb25zdCBkeCA9IHRoaXMucm9ib3RBdHRyLldoZWVsUiAqIDAuNSAqIE1hdGguY29zKHRoZXRhKSAqIChyaWdodFdoZWVsU3BlZWQgKyBsZWZ0V2VlbFNwZWVkKSAqIHRoaXMuZHQ7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5yb2JvdEF0dHIuV2hlZWxSICogMC41ICogTWF0aC5zaW4odGhldGEpICogKHJpZ2h0V2hlZWxTcGVlZCArIGxlZnRXZWVsU3BlZWQpICogdGhpcy5kdDtcblxuICAgICAgICByZXR1cm4geyBkeCwgZHksIGR0aCB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE9ic3RhY2xlcyB9IGZyb20gXCIuL09ic3RhY2xlc1wiO1xuaW1wb3J0IHsgUm9ib3QgfSBmcm9tIFwiLi9Sb2JvdFwiO1xuXG5leHBvcnQgY2xhc3MgV29ybGQge1xuICAgIHJvYm90PSBuZXcgUm9ib3QoKTtcbiAgICBvYnN0YWNsZXM9IG5ldyBPYnN0YWNsZXMoKTtcblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgdGhpcy5vYnN0YWNsZXMuc2hvdygpO1xuICAgICAvLyAgdGhpcy5yb2JvdC5hbmltYXRlKCk7ICAgICAgIFxuICAgIH1cbn0iLCJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vV29ybGRcIjtcblxuY29uc3Qgd29ybGQgPSBuZXcgV29ybGQoKTtcbndvcmxkLmFuaW1hdGUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=