import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animal';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {

  animais$ !: Observable<Animais>;

  constructor(private usuarioService:UsuarioService,
    private animaisService: AnimaisService) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    )
  }

}
