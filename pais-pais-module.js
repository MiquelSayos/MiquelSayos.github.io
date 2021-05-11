(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pais-pais-module"],{

/***/ "/JBF":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pais/pais.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" defaultHref=\"/tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"dadesPais != null\">{{ dadesPais[0].Country }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"dadesPais != null\">\n    <ion-card *ngFor=\"let pais of dadesPais\">\n      <ng-container *ngIf=\"pais\">\n        <ion-card-header>\n          <ion-card-subtitle>{{ pais.Country }}</ion-card-subtitle>\n          <ion-card-title>{{ pais.Date }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Confirmed: {{ pais.Confirmed }} <br>\n          Deaths: {{ pais.Deaths }} <br>\n          Recovered: {{ pais.Recovered }} <br>\n          Active: {{ pais.Active }}\n        </ion-card-content>\n      </ng-container>\n    </ion-card>\n  </ng-container>\n\n  <ng-container *ngIf=\"dadesPais == null\">\n    <ion-card>\n      <ng-container>\n        <ion-card-header>\n          <ion-card-title>Information is not avaiable</ion-card-title>\n        </ion-card-header>\n      </ng-container>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "BVka":
/*!*********************************************!*\
  !*** ./src/app/pais/pais-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PaisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageRoutingModule", function() { return PaisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pais.page */ "eyOs");




const routes = [
    {
        path: '',
        component: _pais_page__WEBPACK_IMPORTED_MODULE_3__["PaisPage"]
    }
];
let PaisPageRoutingModule = class PaisPageRoutingModule {
};
PaisPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaisPageRoutingModule);



/***/ }),

/***/ "eyOs":
/*!***********************************!*\
  !*** ./src/app/pais/pais.page.ts ***!
  \***********************************/
/*! exports provided: PaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPage", function() { return PaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pais.page.html */ "/JBF");
/* harmony import */ var _pais_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pais.page.scss */ "y50+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-service.service */ "njzu");






let PaisPage = class PaisPage {
    constructor(activatedRoute, dades) {
        this.activatedRoute = activatedRoute;
        this.dades = dades;
        this.dadesPais = null;
    }
    ngOnInit() {
        const title = this.activatedRoute.snapshot.paramMap.get('id');
        const decodedTitle = decodeURIComponent(title);
        this.dades.dadesPais(decodedTitle).subscribe((data) => {
            if (data[0] != null) {
                this.dadesPais = data;
                this.dadesPais = this.dadesPais.reverse();
            }
        });
    }
};
PaisPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataServiceService"] }
];
PaisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pais',
        template: _raw_loader_pais_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pais_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaisPage);



/***/ }),

/***/ "y50+":
/*!*************************************!*\
  !*** ./src/app/pais/pais.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWlzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ySGY":
/*!*************************************!*\
  !*** ./src/app/pais/pais.module.ts ***!
  \*************************************/
/*! exports provided: PaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisPageModule", function() { return PaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pais_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pais-routing.module */ "BVka");
/* harmony import */ var _pais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pais.page */ "eyOs");







let PaisPageModule = class PaisPageModule {
};
PaisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pais_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaisPageRoutingModule"]
        ],
        declarations: [_pais_page__WEBPACK_IMPORTED_MODULE_6__["PaisPage"]]
    })
], PaisPageModule);



/***/ })

}]);
//# sourceMappingURL=pais-pais-module.js.map