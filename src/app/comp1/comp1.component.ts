import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, Input } from '@angular/core';
import { Comp3Component } from '../comp3/comp3.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component implements OnInit {

  @Input() tref: TemplateRef<Comp3Component>;

  constructor() { }

  ngOnInit() {
  }

}
