import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.scss'],
})
export class ExpLaboralComponent  implements OnInit {

  experienciasLaborales: any= null;
  constructor() {
      this.experienciasLaborales = JSON.parse( localStorage.getItem("expsLaboral")!) || null; 
      
      console.log(this.experienciasLaborales);        
      
      
   }

  ngOnInit() {}



  trackItems(index: number, itemObject: any) {
  return itemObject.id;
  }


}
