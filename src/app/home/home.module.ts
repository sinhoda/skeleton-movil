import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { DatosComponent } from './datos/datos.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { AgregarExpLaboralComponent } from './agregar-exp-laboral/agregar-exp-laboral.component';
import { AgregarCertificacionComponent } from './agregar-certificacion/agregar-certificacion.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DatosComponent, ExpLaboralComponent, CertificacionesComponent, AgregarExpLaboralComponent, AgregarCertificacionComponent]
})
export class HomePageModule {}
