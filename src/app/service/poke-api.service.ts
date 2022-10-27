import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.httpClient.get(`${this.url}/pokemon?offset=20&limit=100`).pipe(
      tap((res) => res),
      tap((res) => {
        console.log(res);
      })
    );
  }
}
