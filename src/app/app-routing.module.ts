import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'cadastro-viagem', component: CadastroViagemComponent},
  {path:'listagem-viagem', component: ListagemViagemComponent},
  {path:'detalhes-viagem', component: DetalhesViagemComponent},
  {path:'detalhes-viagem/:id', component: DetalhesViagemComponent},
  {path:'exclusao-viagem', component: ExclusaoViagemComponent},
  {path:'exclusao-viagem/:id', component: ExclusaoViagemComponent},
  {path:'', component: ListagemViagemComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
