import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public alertButtons = ['OK'];
  
  
  usuario = {
    nombre: "",
    password: "",
    experianciasLaboral: [],
    certificaciones: [],
    datos:{}
  };

  constructor(private router: Router) {}

  navigate(){
    localStorage.setItem("datosUsuario",JSON.stringify(this.usuario));
    this.router.navigate(['/home/experiencia'] )
  }
  
  ngOnInit() {
  }
 
  limpiarInputs(formulario: any){
    formulario.reset();
  }

  onIniciarSesion(){

  }
}
