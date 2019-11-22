import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
    // console.log('Servicio de info Listo');
    // leer el archivo json
    // console.log( resp['titulo']);


  }
  private cargarInfo() {
    // Leer archivos JSON
    this.http.get('assets/data/data_pagina.json')
    .subscribe ( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;


    });


  }

  private cargarEquipo() {

    this.http.get('https://angular-html-5b92d.firebaseio.com/equipo.json')
    .subscribe ( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);


  });
}
}
