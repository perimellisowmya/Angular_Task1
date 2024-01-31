(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




//ecorator marks a class as a service that can be injected into other components or services.
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'; // Replace with your API endpoint
    }
    //Angular uses observables to handle asynchronous operations, such as HTTP requests.
    ApiService.prototype.getData = function () {
        return this.http.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error('Error fetching data:', error);
            throw error; // You can also return a user-friendly error message
        }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: '',
        // Use your actual authentication guard if available
        children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"authService.isAuthenticated()\"></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// auth.service.ts


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.isAuthenticatedValue = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.isAuthenticatedValue;
    };
    AuthService.prototype.login = function () {
        this.isAuthenticatedValue = true;
        console.log('User authenticated');
        this.router.navigate(['home']);
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticatedValue = false;
        console.log('User logged out');
        this.router.navigate(['login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* styles.css */\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n  }\r\n\r\n.custom-table {\r\n    border-collapse: collapse;\r\n    width: 80%;\r\n    margin-top: 20px;\r\n    box-shadow: 0 4px 8px rgba(132, 125, 125, 0.1);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n  }\r\n\r\n.custom-table th,\r\n  .custom-table td {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: left;\r\n  }\r\n\r\n.custom-table th {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n.row-style:nth-child(even) {\r\n    background-color: #f9f9f9;\r\n  }\r\n\r\n.custom-button{\r\n   /* Adjust the margin-top value as needed */\r\n    padding: 8px;\r\n    background-color: #3498db;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBOztJQUVFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUNBO0dBQ0MsMENBQTBDO0lBQ3pDLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7RUFFakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlcy5jc3MgKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMTMyLCAxMjUsIDEyNSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tdGFibGUgdGgsXHJcbiAgLmN1c3RvbS10YWJsZSB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tdGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICB9XHJcbiAgXHJcbiAgLnJvdy1zdHlsZTpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9XHJcbiAgLmN1c3RvbS1idXR0b257XHJcbiAgIC8qIEFkanVzdCB0aGUgbWFyZ2luLXRvcCB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <table class=\"custom-table\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>Firstname</th>\n        <th>Lastname</th>\n        <th>Email</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"data && data.length > 0\">\n      <tr *ngFor=\"let user of data\" class=\"bg-white\">\n        <td>{{ user.id }}</td>\n        <td>{{ user.firstName }}</td>\n        <td>{{ user.lastName }}</td>\n        <td>{{ user.email }}</td>\n        <td>\n          <button class=\"custom-button\">Edit</button>\n          <button style=\"margin-left:5px\" class=\"custom-button\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n    <tbody *ngIf=\"!data || data.length === 0\">\n      <tr>\n        <td colspan=\"4\" class=\"text-center\">No data available</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData().subscribe(function (response) {
            _this.data = response;
            console.log(response);
        }, function (error) {
            console.error('Error fetching data:', error);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n   overflow: hidden;\r\n  }\r\n  \r\n  .login-box {\r\n    background: #efebeb;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(161, 105, 105, 0.1);\r\n    padding: 40px;\r\n    width: 300px;\r\n   margin-top: 170px; \r\n  }\r\n  \r\n  .form-group {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    font-weight: bold;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  input {\r\n    width: 100%;\r\n    padding: 8px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  button {\r\n    background-color: #4caf50;\r\n    color: #fff;\r\n    border-bottom: -10px;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztHQUVwQixnQkFBZ0I7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsWUFBWTtHQUNiLGlCQUFpQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlYmViO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxNjEsIDEwNSwgMTA1LCAwLjEpO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgbWFyZ2luLXRvcDogMTcwcHg7IFxyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- login.component.html -->\n\n<div class=\"login-container bg-gray-100 min-h-screen flex items-center justify-center\">\n  <div class=\"login-box bg-white p-8 rounded-md shadow-lg w-96\">\n    <h2 class=\"text-3xl font-semibold mb-6 text-center text-blue-500\">Welcome Back!</h2>\n    <form (ngSubmit)=\"onSubmit()\" class=\"space-y-4\">\n      <div *ngIf=\"showError\" class=\"text-red-500 text-sm bg-red-100 p-2 rounded-md mb-4\">\n        {{ errorMessage }}\n        Invalid username or password\n        <!-- Display specific error messages based on the errorType -->\n      </div>\n      <div class=\"mb-4\">\n        <label for=\"username\" class=\"block text-gray-700 font-medium\">Username:</label>\n        <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" required\n          class=\"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\">\n      </div>\n      <div class=\"mb-6\">\n        <label for=\"password\" class=\"block text-gray-700 font-medium\">Password:</label>\n        <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" required\n          class=\"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\">\n      </div>\n      <button type=\"submit\" class=\"w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300\">\n        Login\n      </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
// login.component.ts




var LoginComponent = /** @class */ (function () {
    // errorType: string = '';  
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        // Array of objects with username and password properties
        this.users = [
            { username: 'Sowmya', password: '12345' },
            { username: 'divya', password: '67890' },
        ];
        this.username = '';
        this.password = '';
        this.showError = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // Check if entered credentials match any user in the array
        var matchedUser = this.users.find(function (user) { return user.username === _this.username && user.password === _this.password; });
        if (matchedUser) {
            console.log('Login successful!');
            this.authService.login();
            // this.router.navigate(['/home']);
            // Reset fields and error flag on successful login
            this.username = '';
            this.password = '';
            this.showError = false;
            //  this.errorType = '';
        }
        else {
            console.log('Invalid credentials');
            // Set error flag to display warnings
            this.showError = true;
            // this.errorType = this.users.some(user => user.username === this.username && user.password === this.password) ? 'password' : 'username';
            // Reset fields on unsuccessful login
            this.username = '';
            this.password = '';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: #c8bbbb;\r\n    padding: 10px;\r\n  }\r\n  \r\n  ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  li {\r\n    display: inline;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: bold;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGJiYmI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav  *ngIf=\"authService.isAuthenticated()\">\n    <ul>\n      <li><a routerLink=\"/home\">Home</a></li>\n      <li><a routerLink=\"/about\">About</a></li>\n    </ul>\n    <button (click)=\"onLogout()\">Logout</button>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");

// navbar.component.ts


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.onLogout = function () {
        // Call AuthService's logout method to set authentication status to false
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AKHIL\Desktop\Angular-Tsk1\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map