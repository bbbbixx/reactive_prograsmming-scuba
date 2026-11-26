import { Component, signal } from '@angular/core';
import { Plane } from './plane/plane';
import { PointerAnimation } from './pointer-animation/pointer-animation';
import { Cookiecount } from './cookiecount/cookiecount';

@Component({
  imports: [Plane, PointerAnimation, Cookiecount],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('plane');
}
