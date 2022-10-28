import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRouter.snapshot.params['id'];
    const pokemonInfo = this.pokeApiService.getPokemons(`${this.url}/${id}`);
    const pokemonSpeciesInfo = this.pokeApiService.getPokemons(
      `${this.urlName}/${id}`
    );

    return forkJoin([pokemonInfo, pokemonSpeciesInfo]).subscribe((res) => {
      this.pokemon = res;
    });
  }
}
