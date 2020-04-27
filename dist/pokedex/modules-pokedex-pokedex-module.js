(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pokedex-pokedex-module"],{

/***/ "./dist/pokedata/fesm5/pokedata.js":
/*!*****************************************!*\
  !*** ./dist/pokedata/fesm5/pokedata.js ***!
  \*****************************************/
/*! exports provided: PokedataService, PokedataComponent, PokedataModule, PokeapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedataService", function() { return PokedataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedataComponent", function() { return PokedataComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedataModule", function() { return PokedataModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeapiService", function() { return PokeapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PokedataService = /** @class */ (function () {
    function PokedataService() {
    }
    PokedataService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PokedataService.ctorParameters = function () { return []; };
    /** @nocollapse */ PokedataService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function PokedataService_Factory() { return new PokedataService(); }, token: PokedataService, providedIn: "root" });
    return PokedataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PokedataComponent = /** @class */ (function () {
    function PokedataComponent() {
    }
    /**
     * @return {?}
     */
    PokedataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PokedataComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-pokedata',
                    template: "\n    <p>\n      pokedata works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    PokedataComponent.ctorParameters = function () { return []; };
    return PokedataComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PokedataModule = /** @class */ (function () {
    function PokedataModule() {
    }
    PokedataModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [PokedataComponent],
                    exports: [PokedataComponent]
                },] },
    ];
    return PokedataModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PokeapiService = /** @class */ (function () {
    function PokeapiService(http) {
        this.http = http;
        this.url = '//dev.treinaweb.com.br/pokeapi/';
        this.pokeList = [];
    }
    /**
     * @return {?}
     */
    PokeapiService.prototype.listAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.get(this.url + "/pokedex/1")
            .subscribe(function (response) {
            response.pokemon.forEach(function (pokemon) {
                pokemon.number = _this.getNumberFromUrl(pokemon.resource_uri);
            });
            _this.pokeList = _this.sortPokemon(response.pokemon)
                .filter(function (pokemon) { return pokemon.number < 1000; })
                .slice(0, 9);
        });
    };
    /**
     * @param {?} number
     * @return {?}
     */
    PokeapiService.prototype.getPokemon = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        return this.http.get(this.url + "/pokemon/" + number);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    PokeapiService.prototype.getNumberFromUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    };
    /**
     * @param {?} pokemonList
     * @return {?}
     */
    PokeapiService.prototype.sortPokemon = /**
     * @param {?} pokemonList
     * @return {?}
     */
    function (pokemonList) {
        return pokemonList.sort(function (a, b) {
            return (a.number > b.number ? 1 : -1);
        });
    };
    PokeapiService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PokeapiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    /** @nocollapse */ PokeapiService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function PokeapiService_Factory() { return new PokeapiService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PokeapiService, providedIn: "root" });
    return PokeapiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWRhdGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Bva2VkYXRhL2xpYi9wb2tlZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEubW9kdWxlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvc2VydmljZXMvcG9rZWFwaS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9rZWRhdGFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBva2VkYXRhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHBva2VkYXRhIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQb2tlZGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZWRhdGFDb21wb25lbnQgfSBmcm9tICcuL3Bva2VkYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUG9rZWRhdGFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9rZWRhdGFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBva2VkYXRhTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgUG9rZUxpc3RSZXNwb25zZXtcbiAgY3JlYXRlZDogc3RyaW5nLFxuICBtb2RpZmllZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHBva2Vtb246IGFueVtdLFxuICByZXNvdXJjZV91cmk6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2tlYXBpU2VydmljZSB7XG4gIHByaXZhdGUgdXJsID0gJy8vZGV2LnRyZWluYXdlYi5jb20uYnIvcG9rZWFwaS8nO1xuICBwb2tlTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHsgfVxuXG4gIGxpc3RBbGwoKXtcbiAgICB0aGlzLmh0dHAuZ2V0PFBva2VMaXN0UmVzcG9uc2U+KGAke3RoaXMudXJsfS9wb2tlZGV4LzFgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLnBva2Vtb24uZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIHBva2Vtb24ubnVtYmVyID0gdGhpcy5nZXROdW1iZXJGcm9tVXJsKHBva2Vtb24ucmVzb3VyY2VfdXJpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucG9rZUxpc3QgPSB0aGlzLnNvcnRQb2tlbW9uKHJlc3BvbnNlLnBva2Vtb24pXG4gICAgICAgICAgICAuZmlsdGVyKHBva2Vtb24gPT4gcG9rZW1vbi5udW1iZXIgPCAxMDAwKVxuICAgICAgICAgICAgLnNsaWNlKDAsOSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGdldFBva2Vtb24obnVtYmVyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3Bva2Vtb24vJHtudW1iZXJ9YCk7XG4gIH1cblxuICBwcml2YXRlIGdldE51bWJlckZyb21VcmwodXJsKXtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnJlcGxhY2UoLy4qXFwvKFxcZCspXFwvJC8sICckMScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydFBva2Vtb24ocG9rZW1vbkxpc3Qpe1xuICAgIHJldHVybiBwb2tlbW9uTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gKGEubnVtYmVyID4gYi5udW1iZXIgPyAxIDogLTEpO1xuICAgIH0pXG4gIH1cblxuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OzRCQVZEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7O3lCQVJEOzs7Ozs7O0FDQUE7SUFvQkUsd0JBQ1U7UUFBQSxTQUFJLEdBQUosSUFBSTttQkFKQSxpQ0FBaUM7d0JBQ3BDLEVBQUU7S0FJUjs7OztJQUVMLGdDQUFPOzs7SUFBUDtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXNCLElBQUksQ0FBQyxHQUFHLGVBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsVUFBQSxRQUFRO1lBQ04sUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFBO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQy9DLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFBLENBQUM7aUJBQ3hDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZixDQUNGLENBQUE7S0FDSjs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLGlCQUFZLE1BQVEsQ0FBQyxDQUFDO0tBQ3ZEOzs7OztJQUVPLHlDQUFnQjs7OztjQUFDLEdBQUc7UUFDMUIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRzdDLG9DQUFXOzs7O2NBQUMsV0FBVztRQUM3QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMzQixRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7U0FDdkMsQ0FBQyxDQUFBOzs7Z0JBcENMLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsVUFBVTs7O3lCQURuQjs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./src/app/modules/pokedex/components/list-item/list-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pokedex/components/list-item/list-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poke-list-item {\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding: 10px;\n    border: 1px solid black;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    cursor: pointer;\n    list-style: none;\n    background-color: #333;\n    color: white; }\n  .poke-list-item:hover {\n    background-color: #555; }\n  .poke-list-item img{\n    margin-right: 10px;\n    vertical-align: middle;\n  }"

/***/ }),

/***/ "./src/app/modules/pokedex/components/list-item/list-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pokedex/components/list-item/list-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"poke-list-item\" @listItemState >\n  <a routerLink=\"./{{pokemon.number | myNumber}}\">\n    <img src=\"//serebii.net/pokedex-xy/icon/{{ pokemon.number | myNumber }}.png\" >\n    <span>{{ pokemon.number | myNumber }} - {{ pokemon.name }}</span>\n  </a>\n</li>"

/***/ }),

/***/ "./src/app/modules/pokedex/components/list-item/list-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pokedex/components/list-item/list-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
    }
    ListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "pokemon", void 0);
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/modules/pokedex/components/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/modules/pokedex/components/list-item/list-item.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listItemState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateX(-50%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(30%)',
                        opacity: 0
                    }))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/pokedex/guards/information.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/pokedex/guards/information.guard.ts ***!
  \*************************************************************/
/*! exports provided: InformationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationGuard", function() { return InformationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationGuard = /** @class */ (function () {
    function InformationGuard(router) {
        this.router = router;
    }
    InformationGuard.prototype.canActivate = function (next, state) {
        var number = parseInt(next.params['number'], 10);
        if (number > 0 && number <= 710) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    InformationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InformationGuard);
    return InformationGuard;
}());



/***/ }),

/***/ "./src/app/modules/pokedex/pokedex-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/pokedex/pokedex-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PokedexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedexRoutingModule", function() { return PokedexRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/list/list.component */ "./src/app/modules/pokedex/views/list/list.component.ts");
/* harmony import */ var _views_information_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/information/information.component */ "./src/app/modules/pokedex/views/information/information.component.ts");
/* harmony import */ var _guards_information_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/information.guard */ "./src/app/modules/pokedex/guards/information.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _views_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    },
    {
        path: ':number',
        component: _views_information_information_component__WEBPACK_IMPORTED_MODULE_3__["InformationComponent"],
        canActivate: [_guards_information_guard__WEBPACK_IMPORTED_MODULE_4__["InformationGuard"]]
    }
];
var PokedexRoutingModule = /** @class */ (function () {
    function PokedexRoutingModule() {
    }
    PokedexRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PokedexRoutingModule);
    return PokedexRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pokedex/pokedex.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/pokedex/pokedex.module.ts ***!
  \***************************************************/
/*! exports provided: PokedexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedexModule", function() { return PokedexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pokedex_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokedex-routing.module */ "./src/app/modules/pokedex/pokedex-routing.module.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/modules/pokedex/components/list-item/list-item.component.ts");
/* harmony import */ var _views_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/list/list.component */ "./src/app/modules/pokedex/views/list/list.component.ts");
/* harmony import */ var _pipes_my_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/my-number.pipe */ "./src/app/pipes/my-number.pipe.ts");
/* harmony import */ var _views_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/information/information.component */ "./src/app/modules/pokedex/views/information/information.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CompList = [
    _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ListItemComponent"],
    _views_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
];
var PokedexModule = /** @class */ (function () {
    function PokedexModule() {
    }
    PokedexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pokedex_routing_module__WEBPACK_IMPORTED_MODULE_3__["PokedexRoutingModule"]
            ],
            declarations: CompList.concat([
                _pipes_my_number_pipe__WEBPACK_IMPORTED_MODULE_6__["MyNumberPipe"],
                _views_information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"]
            ]),
            exports: CompList.slice()
        })
    ], PokedexModule);
    return PokedexModule;
}());



/***/ }),

/***/ "./src/app/modules/pokedex/views/information/information.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pokedex/views/information/information.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/pokedex/views/information/information.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pokedex/views/information/information.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\" > < </a>\n\n<div class=\"poke-profile\" >\n  <div>{{ pokemonNumber | myNumber }} - {{ pokemon.name }}</div>\n  <img class=\"poke-sprite\" src=\"//serebii.net/sunmoon/pokemon/{{pokemonNumber | myNumber}}.png\"  />\n</div>\n\n<ul class=\"poke-types\" >\n  <li *ngFor=\"let type of pokemon.types\" >\n    <img src=\"//serebii.net/pokedex-bw/type/{{type.name}}.gif\" />\n  </li>\n</ul>\n\n<table class=\"stats\" >\n  <tr>\n    <td i18n >Attack</td>\n    <td i18n >Defense</td>\n    <td i18n >Sp Atk</td>\n    <td i18n >Sp Def</td>\n    <td i18n >Speed</td>\n  </tr>\n  <tr>\n    <td>{{pokemon.attack}}</td>\n    <td>{{pokemon.defense}}</td>\n    <td>{{pokemon.sp_atk}}</td>\n    <td>{{pokemon.sp_def}}</td>\n    <td>{{pokemon.speed}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/modules/pokedex/views/information/information.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pokedex/views/information/information.component.ts ***!
  \****************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var pokedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pokedata */ "./dist/pokedata/fesm5/pokedata.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationComponent = /** @class */ (function () {
    function InformationComponent(activatedRoute, pokeapi) {
        this.activatedRoute = activatedRoute;
        this.pokeapi = pokeapi;
        this.isAlive = true;
        this.pokemon = {};
    }
    InformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.isAlive; }))
            .subscribe(function (params) {
            _this.pokemonNumber = parseInt(params['number'], 10);
            _this.getPokemon();
        });
    };
    InformationComponent.prototype.ngOnDestroy = function () {
        this.isAlive = false;
    };
    InformationComponent.prototype.getPokemon = function () {
        var _this = this;
        this.pokeapi.getPokemon(this.pokemonNumber)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.isAlive; }))
            .subscribe(function (response) {
            _this.pokemon = response;
        });
    };
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/modules/pokedex/views/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/modules/pokedex/views/information/information.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            pokedata__WEBPACK_IMPORTED_MODULE_3__["PokeapiService"]])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/modules/pokedex/views/list/list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/pokedex/views/list/list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#poke-filter {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 5;\n    padding: 10px;\n    border: 0;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    background-color: #666;\n    color: #fff; }\n  \n  #poke-filter:focus{\n    outline: none;\n  }\n  \n  .selected-pkm{\n    position: fixed;\n    top: 35px;\n    left: 0;\n  }\n  \n  .poke-list {\n    float: right;\n    margin-top: 50px;\n    width: 70%;\n    text-transform: capitalize;\n    opacity: 0.95; }\n  "

/***/ }),

/***/ "./src/app/modules/pokedex/views/list/list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/pokedex/views/list/list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input  [(ngModel)]=\"nameFilter\" type=\"text\" id=\"poke-filter\" i18n-placeholder placeholder=\"Search\" maxlength=\"20\" >\n\n<img [src]=\"pkmSprite\" class=\"selected-pkm\" *ngIf=\"selectedPkm !== null\"  >\n\n\n<ul class=\"poke-list\">\n  <app-list-item *ngFor=\"let pokemon of pokemonList\" [pokemon]=\"pokemon\" (mouseenter)=\"selectPokemon(pokemon)\" ></app-list-item>\n</ul>"

/***/ }),

/***/ "./src/app/modules/pokedex/views/list/list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pokedex/views/list/list.component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pokedata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pokedata */ "./dist/pokedata/fesm5/pokedata.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(pokeapi) {
        this.pokeapi = pokeapi;
        this.nameFilter = '';
        this.selectedPkm = null;
    }
    Object.defineProperty(ListComponent.prototype, "pokemonList", {
        get: function () {
            var _this = this;
            return this.pokeapi.pokeList.filter(function (pokemon) {
                return pokemon.name.toLowerCase().indexOf(_this.nameFilter.toLowerCase()) !== -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "pkmSprite", {
        get: function () {
            var number = ('000' + this.selectedPkm.number).slice(-3);
            return "//serebii.net/sunmoon/pokemon/" + number + ".png";
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.ngOnInit = function () {
        this.pokeapi.listAll();
    };
    ListComponent.prototype.selectPokemon = function (pkm) {
        this.selectedPkm = pkm;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/modules/pokedex/views/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/modules/pokedex/views/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [pokedata__WEBPACK_IMPORTED_MODULE_1__["PokeapiService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pipes/my-number.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/my-number.pipe.ts ***!
  \*****************************************/
/*! exports provided: MyNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNumberPipe", function() { return MyNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyNumberPipe = /** @class */ (function () {
    function MyNumberPipe() {
    }
    MyNumberPipe.prototype.transform = function (value) {
        return ('000' + value).slice(-3);
    };
    MyNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'myNumber'
        })
    ], MyNumberPipe);
    return MyNumberPipe;
}());



/***/ })

}]);
//# sourceMappingURL=modules-pokedex-pokedex-module.js.map