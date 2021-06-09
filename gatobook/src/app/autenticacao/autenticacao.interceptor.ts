import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.retornaToken();
      const header = new HttpHeaders().append('x-access-token',token);
      request = request.clone({headers: header});
    }
    return next.handle(request);
    //parte para o próximo intercept, até acabar
  }

}
