import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
})
export class Comp3Component implements OnInit {
  i = 0;
  txt = 'comp3 changes?';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.changeComp(), 900);
  }

  changeComp() {
    this.txt = 'comp3 changed' + ++this.i;
    console.log('comp3 txt', this.txt);
  }

}
