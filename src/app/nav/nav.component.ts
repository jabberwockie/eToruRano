import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  inicio = 'Inicio';
  nosotros = 'Sobre Nosotros';
  mision = 'Misión';
  vision = 'Visión';
  proyecto = 'Nuestro Proyecto';
  contacto = 'Contacto';

  constructor() { }

  ngOnInit() {
  }

}
