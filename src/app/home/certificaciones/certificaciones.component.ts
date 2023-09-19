import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {

  certificados: any= null;
  constructor() { 
    this.certificados = JSON.parse( localStorage.getItem("certificados")!) || null; 
      
      console.log(this.certificados);       
  }

  ngOnInit() {}


  trackItems(index: number, itemObject: any) {
    return itemObject.id;
    }
}
