import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  getAllPokemonsList(): Observable<any> {
    return this.httpClient.get(`${this.url}/pokemon?offset=20&limit=100`).pipe(
      tap((res) => {
        res;
        console.log(res)
      }),
      tap((res: any) => {
        res.results.map((resPokemons: any) => {
          this.getPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  getPokemons(url: string): Observable<any> {
    return this.httpClient.get(`${url}`).pipe(map((res) => res));
  }
}
