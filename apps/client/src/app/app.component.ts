import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <h1>{{ title }} app is running!</h1>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'client';
}
