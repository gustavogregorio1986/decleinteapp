import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagemurl = 'https://www.icguedes.pro.br/wp-content/uploads/2016/07/Como-elaborar-um-estudo-de-caso.png'
  esutdoalt = 'fotografia'
}
