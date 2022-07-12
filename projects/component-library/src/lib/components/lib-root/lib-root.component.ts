import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-lib-root',
  templateUrl: './lib-root.component.html',
  styleUrls: ['./lib-root.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LibRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
