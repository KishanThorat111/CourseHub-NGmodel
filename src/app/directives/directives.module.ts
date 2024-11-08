import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverColorDirective } from './hoverColor/hover-color.directive';

const directives = [
  HoverColorDirective
];

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...directives
  ]
})
export class DirectivesModule { }
