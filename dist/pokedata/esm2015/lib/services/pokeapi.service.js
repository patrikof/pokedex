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
export class PokeapiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '//dev.treinaweb.com.br/pokeapi/';
        this.pokeList = [];
    }
    /**
     * @return {?}
     */
    listAll() {
        this.http.get(`${this.url}/pokedex/1`)
            .subscribe(response => {
            response.pokemon.forEach(pokemon => {
                pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
            });
            this.pokeList = this.sortPokemon(response.pokemon)
                .filter(pokemon => pokemon.number < 1000)
                .slice(0, 9);
        });
    }
    /**
     * @param {?} number
     * @return {?}
     */
    getPokemon(number) {
        return this.http.get(`${this.url}/pokemon/${number}`);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getNumberFromUrl(url) {
        return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
    }
    /**
     * @param {?} pokemonList
     * @return {?}
     */
    sortPokemon(pokemonList) {
        return pokemonList.sort((a, b) => {
            return (a.number > b.number ? 1 : -1);
        });
    }
}
PokeapiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
PokeapiService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ PokeapiService.ngInjectableDef = i0.defineInjectable({ factory: function PokeapiService_Factory() { return new PokeapiService(i0.inject(i1.HttpClient)); }, token: PokeapiService, providedIn: "root" });
function PokeapiService_tsickle_Closure_declarations() {
    /** @type {?} */
    PokeapiService.prototype.url;
    /** @type {?} */
    PokeapiService.prototype.pokeList;
    /** @type {?} */
    PokeapiService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9rZWRhdGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcG9rZWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRCxNQUFNOzs7O0lBSUosWUFDVTtRQUFBLFNBQUksR0FBSixJQUFJO21CQUpBLGlDQUFpQzt3QkFDcEMsRUFBRTtLQUlSOzs7O0lBRUwsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsUUFBUSxDQUFDLEVBQUU7WUFDVCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzlELENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDeEMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNmLENBQ0YsQ0FBQTtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQztLQUN2RDs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFHO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRzdDLFdBQVcsQ0FBQyxXQUFXO1FBQzdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQTs7OztZQXBDTCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgUG9rZUxpc3RSZXNwb25zZXtcbiAgY3JlYXRlZDogc3RyaW5nLFxuICBtb2RpZmllZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHBva2Vtb246IGFueVtdLFxuICByZXNvdXJjZV91cmk6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2tlYXBpU2VydmljZSB7XG4gIHByaXZhdGUgdXJsID0gJy8vZGV2LnRyZWluYXdlYi5jb20uYnIvcG9rZWFwaS8nO1xuICBwb2tlTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHsgfVxuXG4gIGxpc3RBbGwoKXtcbiAgICB0aGlzLmh0dHAuZ2V0PFBva2VMaXN0UmVzcG9uc2U+KGAke3RoaXMudXJsfS9wb2tlZGV4LzFgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLnBva2Vtb24uZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIHBva2Vtb24ubnVtYmVyID0gdGhpcy5nZXROdW1iZXJGcm9tVXJsKHBva2Vtb24ucmVzb3VyY2VfdXJpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucG9rZUxpc3QgPSB0aGlzLnNvcnRQb2tlbW9uKHJlc3BvbnNlLnBva2Vtb24pXG4gICAgICAgICAgICAuZmlsdGVyKHBva2Vtb24gPT4gcG9rZW1vbi5udW1iZXIgPCAxMDAwKVxuICAgICAgICAgICAgLnNsaWNlKDAsOSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGdldFBva2Vtb24obnVtYmVyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3Bva2Vtb24vJHtudW1iZXJ9YCk7XG4gIH1cblxuICBwcml2YXRlIGdldE51bWJlckZyb21VcmwodXJsKXtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnJlcGxhY2UoLy4qXFwvKFxcZCspXFwvJC8sICckMScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydFBva2Vtb24ocG9rZW1vbkxpc3Qpe1xuICAgIHJldHVybiBwb2tlbW9uTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gKGEubnVtYmVyID4gYi5udW1iZXIgPyAxIDogLTEpO1xuICAgIH0pXG4gIH1cblxuXG59XG4iXX0=