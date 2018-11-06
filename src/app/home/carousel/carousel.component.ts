import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
titulo = 'E Toru Rano Rapa Nui';
bajada = 'El primer parque de decenso de Rapa Nui';
boton = 'Descubre Más';

  constructor() { }

  ngOnInit() {
  }

}
