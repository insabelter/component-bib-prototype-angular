import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['../../../../styles/styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
