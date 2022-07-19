import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['../../../../styles/styles.css','../../../../../../node_modules/@fontsource/raleway/variable.css'],
  encapsulation: ViewEncapsulation.None
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
