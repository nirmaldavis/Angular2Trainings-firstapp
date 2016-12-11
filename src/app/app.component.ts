import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>Updated Inline template - {{ 'Nirmal' | prefix}}</h1>
    <app-other>
      <section>Section Content</section>
      <div class="class-select">
        div with .class-select
      </div>
      <footer>Footer content</footer>
      <header> Header Content </header>

    </app-other>
    <app-another></app-another>
    <app-databinding></app-databinding>

    <app-math></app-math>

    <nav>
      <a [routerLink] ="['/home']" > Home</a>
      <a [routerLink] ="['/profile']" > Profile</a>

      <div>Outlet</div>

      <router-outlet></router-outlet>
    </nav>

  `,

  //<router-outlet name="myoutlet"></router-outlet>

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
