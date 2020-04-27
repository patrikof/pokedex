import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PokedataService = /** @class */ (function () {
    function PokedataService() {
    }
    PokedataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PokedataService.ctorParameters = function () { return []; };
    /** @nocollapse */ PokedataService.ngInjectableDef = defineInjectable({ factory: function PokedataService_Factory() { return new PokedataService(); }, token: PokedataService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    PokeapiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ PokeapiService.ngInjectableDef = defineInjectable({ factory: function PokeapiService_Factory() { return new PokeapiService(inject(HttpClient)); }, token: PokeapiService, providedIn: "root" });
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

export { PokedataService, PokedataComponent, PokedataModule, PokeapiService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWRhdGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Bva2VkYXRhL2xpYi9wb2tlZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEubW9kdWxlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvc2VydmljZXMvcG9rZWFwaS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9rZWRhdGFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBva2VkYXRhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHBva2VkYXRhIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQb2tlZGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZWRhdGFDb21wb25lbnQgfSBmcm9tICcuL3Bva2VkYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUG9rZWRhdGFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9rZWRhdGFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBva2VkYXRhTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgUG9rZUxpc3RSZXNwb25zZXtcbiAgY3JlYXRlZDogc3RyaW5nLFxuICBtb2RpZmllZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHBva2Vtb246IGFueVtdLFxuICByZXNvdXJjZV91cmk6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2tlYXBpU2VydmljZSB7XG4gIHByaXZhdGUgdXJsID0gJy8vZGV2LnRyZWluYXdlYi5jb20uYnIvcG9rZWFwaS8nO1xuICBwb2tlTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHsgfVxuXG4gIGxpc3RBbGwoKXtcbiAgICB0aGlzLmh0dHAuZ2V0PFBva2VMaXN0UmVzcG9uc2U+KGAke3RoaXMudXJsfS9wb2tlZGV4LzFgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLnBva2Vtb24uZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIHBva2Vtb24ubnVtYmVyID0gdGhpcy5nZXROdW1iZXJGcm9tVXJsKHBva2Vtb24ucmVzb3VyY2VfdXJpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucG9rZUxpc3QgPSB0aGlzLnNvcnRQb2tlbW9uKHJlc3BvbnNlLnBva2Vtb24pXG4gICAgICAgICAgICAuZmlsdGVyKHBva2Vtb24gPT4gcG9rZW1vbi5udW1iZXIgPCAxMDAwKVxuICAgICAgICAgICAgLnNsaWNlKDAsOSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGdldFBva2Vtb24obnVtYmVyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3Bva2Vtb24vJHtudW1iZXJ9YCk7XG4gIH1cblxuICBwcml2YXRlIGdldE51bWJlckZyb21VcmwodXJsKXtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnJlcGxhY2UoLy4qXFwvKFxcZCspXFwvJC8sICckMScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydFBva2Vtb24ocG9rZW1vbkxpc3Qpe1xuICAgIHJldHVybiBwb2tlbW9uTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gKGEubnVtYmVyID4gYi5udW1iZXIgPyAxIDogLTEpO1xuICAgIH0pXG4gIH1cblxuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzswQkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdEQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7OzRCQVZEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7O3lCQVJEOzs7Ozs7O0FDQUE7SUFvQkUsd0JBQ1U7UUFBQSxTQUFJLEdBQUosSUFBSTttQkFKQSxpQ0FBaUM7d0JBQ3BDLEVBQUU7S0FJUjs7OztJQUVMLGdDQUFPOzs7SUFBUDtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXNCLElBQUksQ0FBQyxHQUFHLGVBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsVUFBQSxRQUFRO1lBQ04sUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFBO1lBQ0YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQy9DLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFBLENBQUM7aUJBQ3hDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZixDQUNGLENBQUE7S0FDSjs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLGlCQUFZLE1BQVEsQ0FBQyxDQUFDO0tBQ3ZEOzs7OztJQUVPLHlDQUFnQjs7OztjQUFDLEdBQUc7UUFDMUIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRzdDLG9DQUFXOzs7O2NBQUMsV0FBVztRQUM3QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMzQixRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7U0FDdkMsQ0FBQyxDQUFBOzs7Z0JBcENMLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsVUFBVTs7O3lCQURuQjs7Ozs7Ozs7Ozs7Ozs7OyJ9