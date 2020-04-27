/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @record
 */
function PokeListResponse() { }
function PokeListResponse_tsickle_Closure_declarations() {
    /** @type {?} */
    PokeListResponse.prototype.created;
    /** @type {?} */
    PokeListResponse.prototype.modified;
    /** @type {?} */
    PokeListResponse.prototype.name;
    /** @type {?} */
    PokeListResponse.prototype.pokemon;
    /** @type {?} */
    PokeListResponse.prototype.resource_uri;
}
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
    /** @nocollapse */ PokeapiService.ngInjectableDef = i0.defineInjectable({ factory: function PokeapiService_Factory() { return new PokeapiService(i0.inject(i1.HttpClient)); }, token: PokeapiService, providedIn: "root" });
    return PokeapiService;
}());
export { PokeapiService };
function PokeapiService_tsickle_Closure_declarations() {
    /** @type {?} */
    PokeapiService.prototype.url;
    /** @type {?} */
    PokeapiService.prototype.pokeList;
    /** @type {?} */
    PokeapiService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9rZWRhdGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcG9rZWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQmhELHdCQUNVO1FBQUEsU0FBSSxHQUFKLElBQUk7bUJBSkEsaUNBQWlDO3dCQUNwQyxFQUFFO0tBSVI7Ozs7SUFFTCxnQ0FBTzs7O0lBQVA7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFzQixJQUFJLENBQUMsR0FBRyxlQUFZLENBQUM7YUFDckQsU0FBUyxDQUNSLFVBQUEsUUFBUTtZQUNOLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDOUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzlELENBQUMsQ0FBQTtZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUMvQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksRUFBckIsQ0FBcUIsQ0FBQztpQkFDeEMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNmLENBQ0YsQ0FBQTtLQUNKOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxNQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxpQkFBWSxNQUFRLENBQUMsQ0FBQztLQUN2RDs7Ozs7SUFFTyx5Q0FBZ0I7Ozs7Y0FBQyxHQUFHO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRzdDLG9DQUFXOzs7O2NBQUMsV0FBVztRQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQTs7O2dCQXBDTCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRRLFVBQVU7Ozt5QkFEbkI7O1NBZ0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBQb2tlTGlzdFJlc3BvbnNle1xuICBjcmVhdGVkOiBzdHJpbmcsXG4gIG1vZGlmaWVkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgcG9rZW1vbjogYW55W10sXG4gIHJlc291cmNlX3VyaTogc3RyaW5nXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBva2VhcGlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB1cmwgPSAnLy9kZXYudHJlaW5hd2ViLmNvbS5ici9wb2tlYXBpLyc7XG4gIHBva2VMaXN0ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkgeyB9XG5cbiAgbGlzdEFsbCgpe1xuICAgIHRoaXMuaHR0cC5nZXQ8UG9rZUxpc3RSZXNwb25zZT4oYCR7dGhpcy51cmx9L3Bva2VkZXgvMWApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmVzcG9uc2UucG9rZW1vbi5mb3JFYWNoKHBva2Vtb24gPT4ge1xuICAgICAgICAgICAgcG9rZW1vbi5udW1iZXIgPSB0aGlzLmdldE51bWJlckZyb21VcmwocG9rZW1vbi5yZXNvdXJjZV91cmkpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5wb2tlTGlzdCA9IHRoaXMuc29ydFBva2Vtb24ocmVzcG9uc2UucG9rZW1vbilcbiAgICAgICAgICAgIC5maWx0ZXIocG9rZW1vbiA9PiBwb2tlbW9uLm51bWJlciA8IDEwMDApXG4gICAgICAgICAgICAuc2xpY2UoMCw5KTtcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG5cbiAgZ2V0UG9rZW1vbihudW1iZXI6IG51bWJlcik6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vcG9rZW1vbi8ke251bWJlcn1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TnVtYmVyRnJvbVVybCh1cmwpe1xuICAgIHJldHVybiBwYXJzZUludCh1cmwucmVwbGFjZSgvLipcXC8oXFxkKylcXC8kLywgJyQxJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0UG9rZW1vbihwb2tlbW9uTGlzdCl7XG4gICAgcmV0dXJuIHBva2Vtb25MaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiAoYS5udW1iZXIgPiBiLm51bWJlciA/IDEgOiAtMSk7XG4gICAgfSlcbiAgfVxuXG5cbn1cbiJdfQ==