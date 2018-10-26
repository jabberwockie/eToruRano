import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
cards = {
  id: 1,
  titulo: 'Un Título choro',
  texto_resumen: 'Este es el resumen del texto',
  imagen_resumen: 'https://picsum.photos/600/400?image=19'
};

  constructor() { }

  ngOnInit() {
  }

}
