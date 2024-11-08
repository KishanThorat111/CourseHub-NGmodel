import { Component, computed, inject, input, signal } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // @Input() courses: any[] = [];
  // courses: Course[] = [];
  // courses = signal<Course[]>([]);
  // @Input() isAdmin = false;

  isAdmin = input<boolean>(false);

  // isAdmin1 = model<boolean>(false, {
  //   alias: 'isActive',
  // });

  // isAdmin1 = model.required<boolean>({
  //   alias: 'isActive',
  // });

  // isAdmin = input.required(
  //   // false, 
  //   {
  //   // alias: 'isAdm',
  //   // transform: (value: boolean) => {
  //   //   // execute any code
  //   //   return value;
  //   // },
  //   }
  // );

  // @Output() del = new EventEmitter();

  // del = output<any>({
  //   alias: '',
  // });
  // coursesSub!: Subscription;
  courseService = inject(CourseService);

  // courses = computed(() => this.courseService.coursesSignal());


  // private sanitizer = inject(DomSanitizer);

  // without signals
  a = 1;
  b = 2;
  c = this.a + this.b;

  // with signals
  a1 = signal(1);
  b1 = signal(2);
  c1 = computed(() => this.a1() + this.b1());

  constructor() // private courseService: CourseService
  {
    // // Use `effect` to automatically respond to changes in the service's courses signal
    // effect(
    //   () => {
    //     console.log('effect');
    //     const courses = this.courseService.coursesSignal();

    //     if (courses !== this.courses()) {
    //       this.courses.set(courses);
    //       console.log('Updated courses: ', this.courses());
    //     }
    //   },
    //   { allowSignalWrites: true }
    // );
  }

  ngOnInit() {
    // this.understandSignalUsageWithExample();
    // // this.courses = this.courseService.getCourses();
    // this.courses.set(this.courseService.getCourses());
    // // this.getCourses();
    // this.coursesSub = this.courseService.courses.subscribe({
    //   next: (courses) => {
    //     // this.courses = courses;
    //     // console.log('courses: ', this.courses);
    //     this.courses.set(courses);
    //     console.log('courses: ', this.courses());
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    // });
  }

  understandSignalUsageWithExample() {
    // without signals
    console.log('c before value change: ', this.c);
    this.a = 4;
    console.log('c after value change: ', this.c);

    // with signals
    console.log('c1 before value change: ', this.c1());
    this.a1.set(4);
    console.log('c1 after value change: ', this.c1());
  }

  // sanitizeUrl(value: string) {
  //   return this.sanitizer.sanitize(SecurityContext.URL, value) || null;
  // }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data) {
  //     this.courses = JSON.parse(data);
  //     // this.courses[0] = { ...this.courses[0], isActive: true };
  //   }
  // }

  deleteCourse(course: Course) {
    // this.del.emit(course);
    this.courseService.deleteCourse(course);
  }

  // changeIsActive(course: Course) {
  //   this.isAdmin1.update((val) => !val);
  // }

  ngOnDestroy() {
    // console.log('courses ondestroy');
    // if(this.coursesSub) this.coursesSub.unsubscribe();
  }
}