import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken(){
    return localStorage.getItem(KEY) ?? ''
  }


  salvaToken(token: string){
    localStorage.setItem(KEY,token)
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }

  possuiToken(){
    if (this.retornaToken() == ''){
      return false
    }else{
      return true
    }
  }

}
