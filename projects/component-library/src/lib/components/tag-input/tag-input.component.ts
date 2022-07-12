import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {

  tagForm: FormGroup;
  @Input() tags!: String[];
  @Output() tagsChange = new EventEmitter<String[]>();

  constructor( private formBuilder: FormBuilder) {
    this.tagForm = this.formBuilder.group({
      tagInput: ''
    });
  }

  addTag(): void {
    const value = this.tagForm.value.tagInput;

    console.log(value);

    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    this.tagForm.setValue({ tagInput:'' });
  }

}
