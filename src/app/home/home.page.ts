import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


public usuario;

constructor(private route: ActivatedRoute, private router: Router) {
    this.usuario = {
      nombre: route.snapshot.paramMap.get('nombre'),
    }
    
  }

  segmentChanged( event: any ){
    const valor = event.detail.value;
    console.log(valor);
    let dir:string = "/home/"+ valor;
    this.router.navigate([dir]) 
  } 

}
