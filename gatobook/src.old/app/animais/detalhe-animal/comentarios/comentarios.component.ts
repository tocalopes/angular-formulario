import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comentarios } from './comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() id!:number;
  comentarios$! :Observable<Comentarios>;
  comentarioForm! : FormGroup;

  constructor(private formBuilder:FormBuilder,
    private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['',Validators.maxLength(300)]
    })
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService
      .incluiComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscaComentario(this.id)),
        tap(() => {
          this.comentarioForm.reset();
          alert('Comentário salvo"')
        })
        );
  }

}
