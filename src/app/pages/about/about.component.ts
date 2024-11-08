import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // private route = inject(ActivatedRoute);

  // ngOnInit() {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);

  //   this.route.params.subscribe({
  //     next: (data) => {
  //       console.log(data['id']);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     }
  //   });
  // }

}
