import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
})
export class Comp2Component implements OnInit {
  i = 0;
  txt: string = 'comp2 changes?';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.changeComp(), 500);
  }


  changeComp() {
    this.txt = 'comp2 changed' + ++this.i;
    console.log('comp2 txt', this.txt);
  }
}
