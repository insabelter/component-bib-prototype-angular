import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibRootComponent } from './lib-root/lib-root.component';
import { TagComponent } from './tag-input/tag/tag.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LibRootComponent,
    TagInputComponent,
    TagComponent

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
