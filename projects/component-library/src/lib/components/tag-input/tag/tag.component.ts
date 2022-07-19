import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TagComponent {

  @Input() tag!: String;
  @Input() tags!: String[];
  @Output() tagsChange = new EventEmitter<String[]>();

  constructor() { }

  removeTag(): void {
    const index = this.tags.indexOf(this.tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

    this.tagsChange.emit(this.tags);
  }

}
