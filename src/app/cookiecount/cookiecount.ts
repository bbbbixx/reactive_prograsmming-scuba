import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cookiecount',
  styleUrl: './cookiecount.css',
  templateUrl: './cookiecount.html',
})
export class Cookiecount {
  count = signal(0);

  increaseCount() {
    this.count.update((c) => c + 1);
  }
}
