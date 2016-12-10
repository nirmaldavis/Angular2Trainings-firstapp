import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>Updated Inline template</h1>
    <app-other>
      <section>Section Content</section>
      <div class="class-select">
        div with .class-select
      </div>
      <footer>Footer content</footer>
      <header> Header Content </header>
      
    </app-other>
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
