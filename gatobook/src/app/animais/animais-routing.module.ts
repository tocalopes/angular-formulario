import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
