import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  @Output() public searchPokemon: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public search($event: string) {
    this.searchPokemon.emit($event);
  }
}
