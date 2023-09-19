import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-exp-laboral',
  templateUrl: './agregar-exp-laboral.component.html',
  styleUrls: ['./agregar-exp-laboral.component.scss'],
})
export class AgregarExpLaboralComponent  implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {}

  usuario = {}
  expLaboral={}

  empresa="";
  anInicio="";
  trabajoActual="";
  anTermino:any = null;
  cargo="";

  resetForm(formulario: any){
    formulario.reset();
  };

  handleChange(e: any){
    console.log(e.detail.value);
    if(e.detail.value=="si"){
      this.anTermino=null
    }
  };


  addExp(){
    
    let expLaboralArray = JSON.parse(localStorage.getItem("expsLaboral")!) || [];
    let anio: number = new Date().getFullYear();

    if(this.trabajoActual=="si"){
      this.anTermino = anio;
    }

    this.expLaboral = {
        empresa: this.empresa,
        anioInicio: this.anInicio,
        trabajoActual: this.trabajoActual,
        anioTermino: this.anTermino,
        cargo: this.cargo
    }

   expLaboralArray.push(this.expLaboral);

   localStorage.setItem("expsLaboral", JSON.stringify(expLaboralArray));
    this.router.navigate(['/home/experiencia'] )
    
  };

}
