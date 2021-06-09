import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(private animaisService: AnimaisService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.animalId = this._activatedRoute.snapshot.params.animalId,
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

}
