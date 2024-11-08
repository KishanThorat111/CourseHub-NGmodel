import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

const components = [CoursesComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [...components]
})
export class CoursesModule { }
