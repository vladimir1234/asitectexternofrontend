import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

const routes: Routes = [
   {path:'inicio' , component: InicioComponent},
   {path:'solicitud' , component: SolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
