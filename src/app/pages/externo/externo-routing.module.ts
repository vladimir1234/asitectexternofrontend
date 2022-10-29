import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaComponent } from './bandeja/bandeja.component';
import { PeriodoComponent } from './periodo/periodo.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {path: 'bandeja',component: BandejaComponent},
    {path: 'periodo',component: PeriodoComponent},
    {path: '**', redirectTo: 'bandeja'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternoRoutingModule { }
