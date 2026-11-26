import { Component, signal } from '@angular/core';
import { Plane } from './plane/plane';
import { PointerAnimation } from './pointer-animation/pointer-animation';

@Component({
  imports: [Plane, PointerAnimation],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('plane');
}
