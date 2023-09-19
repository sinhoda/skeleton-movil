import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DatosComponent } from './datos/datos.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { AgregarExpLaboralComponent } from './agregar-exp-laboral/agregar-exp-laboral.component';
import { AgregarCertificacionComponent } from './agregar-certificacion/agregar-certificacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'datos', component: DatosComponent},
      { path: 'experiencia', component: ExpLaboralComponent},
      { path: 'certificaciones', component: CertificacionesComponent},
      { path: 'agregar-experiencia', component: AgregarExpLaboralComponent},
      {path: 'agregar-certificacion', component: AgregarCertificacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
