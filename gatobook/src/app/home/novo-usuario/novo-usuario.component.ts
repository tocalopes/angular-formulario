import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService :UsuarioExisteService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email:['',
          Validators.required,
          Validators.email,
      ],
        fullName:['',
        [Validators.required,
        Validators.minLength(4)]
      ],
        userName:['',
        [minusculoValidator],
        [this.usuarioExisteService.usuarioJaExiste()]
      ],
        password:['',
        Validators.minLength(3)
      ],
      },
      {
        Validators: [usuarioSenhaIguaisValidator]
      }
    )
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue()
    this.novoUsuarioService.cadastroNovoUsuario(novoUsuario).subscribe(
      (res) => console.log(JSON.stringify(res))
    )
  }

}
