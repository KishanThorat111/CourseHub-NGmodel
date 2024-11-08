import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // private router = inject(Router); 
  // val: number = 2;
  // courses: any[] = [];

  private http = inject(HttpClient);

  constructor(
    // private router: Router
  ) {}

  // navigate() {
  //   this.router.navigate(['/about']);
  // }

  ngOnInit() {
    console.log('home ngoninit');
    // this.getCourses();

    this.fetchHttpData();
  }

  

  async fetchHttpData() {
    //  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: (posts) => {
    //     console.log(posts);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    //  });

    try {
      const posts = await lastValueFrom(
        this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      );
  
      console.log('posts: ', posts);
    } catch(e) {
      console.log(e);
    }
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

}
