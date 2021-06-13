import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animal';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {

  animais !: Animais;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param=> {
      this.animais = this.activateRoute.snapshot.data['animais'];
    })
  }

}
