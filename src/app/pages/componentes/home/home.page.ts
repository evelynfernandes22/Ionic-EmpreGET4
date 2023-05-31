import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppEmpregetService } from 'src/app/services/app-empreget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private AppEmpregetService : AppEmpregetService) { }

/*
  buscarPrestador(evento){
    let codigoObjeto = evento.detail.value;
    this.AppEmpregetService.findAllPrestadorPerfil(codigoObjeto)
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    });
  }
*/  
  ngOnInit() {
  }


}
