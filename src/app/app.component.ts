import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>Updated Inline template</h1>
    <app-other></app-other>
    <app-another></app-another>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color:red;
    }
  `]
})
export class AppComponent {
  title = 'app works!';
}
