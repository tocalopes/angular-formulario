import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animal';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(private usuarioService:UsuarioService,
    private animaisService: AnimaisService) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe(
      usuario => {
        const userName = usuario.name ?? '';
        this.animaisService.listaDoUsuario(userName).subscribe(
          animais => {
            this.animais = animais;
          }
        )
      }
    )
  }

}
