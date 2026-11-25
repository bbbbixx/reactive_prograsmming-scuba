import { Component, signal } from '@angular/core';
import { Plane } from './plane/plane';

@Component({
  imports: [Plane],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('plane');
}
