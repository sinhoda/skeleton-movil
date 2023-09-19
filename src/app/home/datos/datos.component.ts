import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent  implements OnInit {

  constructor() { }


  datos = {
    nombre: "",
    apellido: "",
    nivelEducacional: "",
    fechaNacimiento: "",
  };

  nombre: string ="";
  fechaNacimiento: string ="";
  apellido: string="";  
  nivelEducacional: string="";
  isAlertOpen = false;
  public alertButtons = ['OK'];

  usuario = {
    nombre: "",
  };

  ngOnInit() {
    let nombreUsu = JSON.parse(localStorage.getItem('datosUsuario')!) || [];
    
    
    this.usuario = {
      nombre: nombreUsu.nombre
    }
    
    this.cargarDatos();
  }



  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  limpiarInputs(formulario: any){
    console.log("ala");
    formulario.reset();
  };

  cargarDatos(){
    let datosArray = JSON.parse(localStorage.getItem('datosPersonales')!) || null;
    if (datosArray != null){
      this.nombre = datosArray.nombre;
      this.fechaNacimiento = datosArray.fechaNacimiento;
      this.apellido = datosArray.apellido;  
      this.nivelEducacional = datosArray.nivelEducacional;
    }

  };


  addDatos(){
    
    this.datos = {
      nombre: this.nombre,
      apellido: this.apellido,
      nivelEducacional: this.nivelEducacional,
      fechaNacimiento: this.fechaNacimiento,
    }

    localStorage.setItem('datosPersonales',JSON.stringify(this.datos));


  };

}
