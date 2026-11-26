import { Component, HostBinding, Input, input, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pointer-animation',
  styleUrl: './pointer-animation.css',
  templateUrl: './pointer-animation.html',
})
export class PointerAnimation implements OnInit {
  @Input() set x(x: number) {
    this.left = `${x - 24}px`;
  }
  @Input() set y(y: number) {
    this.top = `${y - 24}px`;
  }

  @HostBinding('style.position') position = 'fixed';
  @HostBinding('style.top') top = '0px';
  @HostBinding('style.left') left = '0px';

  ngOnInit(): void {}
}
