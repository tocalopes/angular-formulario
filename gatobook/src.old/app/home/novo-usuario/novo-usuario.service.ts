import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.API_URL
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) {

  }

  cadastroNovoUsuario(novoUsuario:NovoUsuario) : Observable<NovoUsuario>{
    return this.http.post<NovoUsuario>(`${API}/user/signup`, novoUsuario)
  }

  vetificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
