import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CoursesModule } from '../courses/courses.module';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CoursesModule,
    DirectivesModule
  ],
})
export class AdminModule { }
