import { Component, OnInit } from '@angular/core';
import { LojaService } from './service/loja.service';
import { IRelogio } from 'Interface/IRelogio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sucessoTotal';
  relogios: Array<IRelogio> = [];
  constructor(private ls: LojaService) {
  }
  kb() {
    this.ls.getAll().subscribe((not) => {
      this.relogios = not;
    });
  }

  ngOnInit(): void {
    this.ls.getAll().subscribe((not) => {
      this.relogios = not;
    });
  }
}
