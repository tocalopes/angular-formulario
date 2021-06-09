import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais, Animal } from './animal';


const API = environment.API_URL
@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient,private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario : string): Observable<Animais>{
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`)
  }

  buscaPorId(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${API}/photos/${id}`)
  }
}
