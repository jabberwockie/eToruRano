import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  titles: Array<string> = ['Links de Interés', 'Redes Sociales', '¡Contáctanos!'];
  links: Array<string> = ['Link Uno', 'Link Dos', 'Link 3'];
  contacto: Array<string> = ['+56 9 1234 6548', 'hola@etorurano.com', 'Atamu Tekena s/n'];
  facebook = 'https://facebook.com';
  twitter = 'https://www.twitter.com';
  src = '../../../assets/bicycle.png';

  constructor() { }

  ngOnInit() {
  }

}
