import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemonsList().subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public getSearchedPokemon($pokemon: string) {
    const filter = this.setAllPokemons.filter((pokemon: any) => {
      return !pokemon.name.indexOf($pokemon.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
