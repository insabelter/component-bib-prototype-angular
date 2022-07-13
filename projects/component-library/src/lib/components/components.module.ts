import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag-input/tag/tag.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylesComponent } from './styles/styles.component';



@NgModule({
  declarations: [
    TagInputComponent,
    TagComponent,
    StylesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TagInputComponent
  ]
})
export class ComponentsModule { }
