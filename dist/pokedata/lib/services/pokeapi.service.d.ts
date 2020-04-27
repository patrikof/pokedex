import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class PokeapiService {
    private http;
    private url;
    pokeList: any[];
    constructor(http: HttpClient);
    listAll(): void;
    getPokemon(number: number): Observable<any>;
    private getNumberFromUrl(url);
    private sortPokemon(pokemonList);
}
