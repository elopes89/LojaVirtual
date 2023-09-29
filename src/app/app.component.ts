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

  image = "https://acdn.mitiendanube.com/stores/002/078/682/products/design-sem-nome-9211-5f2041521abb3ea28d16509102492182-640-0.webp"
}
