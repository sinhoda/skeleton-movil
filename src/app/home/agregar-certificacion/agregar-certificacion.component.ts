import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-certificacion',
  templateUrl: './agregar-certificacion.component.html',
  styleUrls: ['./agregar-certificacion.component.scss'],
})
export class AgregarCertificacionComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  nombreCertificado = "";
  fechaObtencion = "";
  puedeVencer = "";
  fechaVencimiento = "";

  certificado = {};

  resetForm(formulario: any){
    formulario.reset();
  };

  handleChange(e: any){
    console.log(e.detail.value);
    /* if(e.detail.value=="si"){
      
    } */
  };


  addCert(){
    
    let certificadosArray = JSON.parse(localStorage.getItem("certificados")!) || [];


    if(this.puedeVencer=="no"){
      this.fechaVencimiento = "sin fecha de termino";
    }

    this.certificado = {
        nombreCertificado: this.nombreCertificado,
        fechaObtencion: this.fechaObtencion,
        puedeVencer: this.puedeVencer,
        fechaVencimiento: this.fechaVencimiento,
    }

   certificadosArray.push(this.certificado);

   localStorage.setItem("certificados", JSON.stringify(certificadosArray));
    this.router.navigate(['/home/certificaciones'] )
    
  };

}
