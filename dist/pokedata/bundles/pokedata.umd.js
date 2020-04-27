(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('pokedata', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global.pokedata = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PokedataService = (function () {
        function PokedataService() {
        }
        PokedataService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        PokedataService.ctorParameters = function () { return []; };
        /** @nocollapse */ PokedataService.ngInjectableDef = i0.defineInjectable({ factory: function PokedataService_Factory() { return new PokedataService(); }, token: PokedataService, providedIn: "root" });
        return PokedataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PokedataComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var PokedataModule = (function () {
        function PokedataModule() {
        }
        PokedataModule.decorators = [
            { type: i0.NgModule, args: [{
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
    var PokeapiService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        PokeapiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ PokeapiService.ngInjectableDef = i0.defineInjectable({ factory: function PokeapiService_Factory() { return new PokeapiService(i0.inject(i1.HttpClient)); }, token: PokeapiService, providedIn: "root" });
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

    exports.PokedataService = PokedataService;
    exports.PokedataComponent = PokedataComponent;
    exports.PokedataModule = PokedataModule;
    exports.PokeapiService = PokeapiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZWRhdGEudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wb2tlZGF0YS9saWIvcG9rZWRhdGEuc2VydmljZS50cyIsIm5nOi8vcG9rZWRhdGEvbGliL3Bva2VkYXRhLmNvbXBvbmVudC50cyIsIm5nOi8vcG9rZWRhdGEvbGliL3Bva2VkYXRhLm1vZHVsZS50cyIsIm5nOi8vcG9rZWRhdGEvbGliL3NlcnZpY2VzL3Bva2VhcGkuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBva2VkYXRhU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wb2tlZGF0YScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBwb2tlZGF0YSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUG9rZWRhdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBva2VkYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9wb2tlZGF0YS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Bva2VkYXRhQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Bva2VkYXRhQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQb2tlZGF0YU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIFBva2VMaXN0UmVzcG9uc2V7XG4gIGNyZWF0ZWQ6IHN0cmluZyxcbiAgbW9kaWZpZWQ6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBwb2tlbW9uOiBhbnlbXSxcbiAgcmVzb3VyY2VfdXJpOiBzdHJpbmdcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9rZWFwaVNlcnZpY2Uge1xuICBwcml2YXRlIHVybCA9ICcvL2Rldi50cmVpbmF3ZWIuY29tLmJyL3Bva2VhcGkvJztcbiAgcG9rZUxpc3QgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICBsaXN0QWxsKCl7XG4gICAgdGhpcy5odHRwLmdldDxQb2tlTGlzdFJlc3BvbnNlPihgJHt0aGlzLnVybH0vcG9rZWRleC8xYClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICByZXNwb25zZS5wb2tlbW9uLmZvckVhY2gocG9rZW1vbiA9PiB7XG4gICAgICAgICAgICBwb2tlbW9uLm51bWJlciA9IHRoaXMuZ2V0TnVtYmVyRnJvbVVybChwb2tlbW9uLnJlc291cmNlX3VyaSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnBva2VMaXN0ID0gdGhpcy5zb3J0UG9rZW1vbihyZXNwb25zZS5wb2tlbW9uKVxuICAgICAgICAgICAgLmZpbHRlcihwb2tlbW9uID0+IHBva2Vtb24ubnVtYmVyIDwgMTAwMClcbiAgICAgICAgICAgIC5zbGljZSgwLDkpO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cblxuICBnZXRQb2tlbW9uKG51bWJlcjogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9wb2tlbW9uLyR7bnVtYmVyfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROdW1iZXJGcm9tVXJsKHVybCl7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5yZXBsYWNlKC8uKlxcLyhcXGQrKVxcLyQvLCAnJDEnKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRQb2tlbW9uKHBva2Vtb25MaXN0KXtcbiAgICByZXR1cm4gcG9rZW1vbkxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIChhLm51bWJlciA+IGIubnVtYmVyID8gMSA6IC0xKTtcbiAgICB9KVxuICB9XG5cblxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkh0dHBDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzhCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixvQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGdEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O2dDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQzdCOzs2QkFSRDs7Ozs7OztBQ0FBO1FBb0JFLHdCQUNVO1lBQUEsU0FBSSxHQUFKLElBQUk7dUJBSkEsaUNBQWlDOzRCQUNwQyxFQUFFO1NBSVI7Ozs7UUFFTCxnQ0FBTzs7O1lBQVA7Z0JBQUEsaUJBWUM7Z0JBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXNCLElBQUksQ0FBQyxHQUFHLGVBQVksQ0FBQztxQkFDckQsU0FBUyxDQUNSLFVBQUEsUUFBUTtvQkFDTixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDOUQsQ0FBQyxDQUFBO29CQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3lCQUMvQyxNQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksR0FBQSxDQUFDO3lCQUN4QyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNmLENBQ0YsQ0FBQTthQUNKOzs7OztRQUVELG1DQUFVOzs7O1lBQVYsVUFBVyxNQUFjO2dCQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLGlCQUFZLE1BQVEsQ0FBQyxDQUFDO2FBQ3ZEOzs7OztRQUVPLHlDQUFnQjs7OztzQkFBQyxHQUFHO2dCQUMxQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7Ozs7UUFHN0Msb0NBQVc7Ozs7c0JBQUMsV0FBVztnQkFDN0IsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzNCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtpQkFDdkMsQ0FBQyxDQUFBOzs7b0JBcENMRixhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFkUUcsYUFBVTs7Ozs2QkFEbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9