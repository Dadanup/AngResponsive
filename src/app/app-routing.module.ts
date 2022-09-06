import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'cancelar',loadChildren:()=>import('./modules/cancelar/cancelar.module').then(m=>m.CancelarModule)},
    {path:'editar',loadChildren:()=>import('./modules/modificar/modificar.module').then(m=>m.ModificarModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
