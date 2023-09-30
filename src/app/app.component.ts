import { Component, OnInit } from '@angular/core';
import { LojaService } from './service/loja.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sucessoTotal';
  constructor(private ls: LojaService) {
  }

  relogios = this.ls.relogio

  ngOnInit(): void {
  }

}
