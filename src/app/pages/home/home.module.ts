import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutModule } from '../about/about.module';
import { CoursesModule } from '../courses/courses.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    CoursesModule
  ]
})
export class HomeModule { }
