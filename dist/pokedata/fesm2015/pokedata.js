import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PokedataService {
    constructor() { }
}
PokedataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
PokedataService.ctorParameters = () => [];
/** @nocollapse */ PokedataService.ngInjectableDef = defineInjectable({ factory: function PokedataService_Factory() { return new PokedataService(); }, token: PokedataService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PokedataComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PokedataComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pokedata',
                template: `
    <p>
      pokedata works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
PokedataComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PokedataModule {
}
PokedataModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [PokedataComponent],
                exports: [PokedataComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PokeapiService {
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
/** @nocollapse */ PokeapiService.ngInjectableDef = defineInjectable({ factory: function PokeapiService_Factory() { return new PokeapiService(inject(HttpClient)); }, token: PokeapiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { PokedataService, PokedataComponent, PokedataModule, PokeapiService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWRhdGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Bva2VkYXRhL2xpYi9wb2tlZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEuY29tcG9uZW50LnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEubW9kdWxlLnRzIiwibmc6Ly9wb2tlZGF0YS9saWIvc2VydmljZXMvcG9rZWFwaS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9rZWRhdGFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBva2VkYXRhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHBva2VkYXRhIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQb2tlZGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZWRhdGFDb21wb25lbnQgfSBmcm9tICcuL3Bva2VkYXRhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUG9rZWRhdGFDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9rZWRhdGFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBva2VkYXRhTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgUG9rZUxpc3RSZXNwb25zZXtcbiAgY3JlYXRlZDogc3RyaW5nLFxuICBtb2RpZmllZDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHBva2Vtb246IGFueVtdLFxuICByZXNvdXJjZV91cmk6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2tlYXBpU2VydmljZSB7XG4gIHByaXZhdGUgdXJsID0gJy8vZGV2LnRyZWluYXdlYi5jb20uYnIvcG9rZWFwaS8nO1xuICBwb2tlTGlzdCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHsgfVxuXG4gIGxpc3RBbGwoKXtcbiAgICB0aGlzLmh0dHAuZ2V0PFBva2VMaXN0UmVzcG9uc2U+KGAke3RoaXMudXJsfS9wb2tlZGV4LzFgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlLnBva2Vtb24uZm9yRWFjaChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIHBva2Vtb24ubnVtYmVyID0gdGhpcy5nZXROdW1iZXJGcm9tVXJsKHBva2Vtb24ucmVzb3VyY2VfdXJpKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucG9rZUxpc3QgPSB0aGlzLnNvcnRQb2tlbW9uKHJlc3BvbnNlLnBva2Vtb24pXG4gICAgICAgICAgICAuZmlsdGVyKHBva2Vtb24gPT4gcG9rZW1vbi5udW1iZXIgPCAxMDAwKVxuICAgICAgICAgICAgLnNsaWNlKDAsOSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuXG4gIGdldFBva2Vtb24obnVtYmVyOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L3Bva2Vtb24vJHtudW1iZXJ9YCk7XG4gIH1cblxuICBwcml2YXRlIGdldE51bWJlckZyb21VcmwodXJsKXtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnJlcGxhY2UoLy4qXFwvKFxcZCspXFwvJC8sICckMScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydFBva2Vtb24ocG9rZW1vbkxpc3Qpe1xuICAgIHJldHVybiBwb2tlbW9uTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gKGEubnVtYmVyID4gYi5udW1iZXIgPyAxIDogLTEpO1xuICAgIH0pXG4gIH1cblxuXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7Ozs7O0FDUkQ7Ozs7SUFvQkUsWUFDVTtRQUFBLFNBQUksR0FBSixJQUFJO21CQUpBLGlDQUFpQzt3QkFDcEMsRUFBRTtLQUlSOzs7O0lBRUwsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUNyRCxTQUFTLENBQ1IsUUFBUTtZQUNOLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQzlCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5RCxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDL0MsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDeEMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNmLENBQ0YsQ0FBQTtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxZQUFZLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBRztRQUMxQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHN0MsV0FBVyxDQUFDLFdBQVc7UUFDN0IsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDM0IsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1NBQ3ZDLENBQUMsQ0FBQTs7OztZQXBDTCxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OyJ9