import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { concatMap, elementAt, fromEvent, Observable, switchMap, tap } from 'rxjs';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-plane',
  styleUrl: './plane.css',
  templateUrl: './plane.html',
})
export class Plane implements OnInit {
  scubaRef = viewChild<ElementRef>('scuba');
  scubapositionRef = viewChild<ElementRef>('scubaposition');

  originX = 0;
  originY = 0;

  constructor() {}
  ngOnInit(): void {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(
        tap(() => {
          if (this.originX === 0 && this.originY === 0) {
            const { scubaX, scubaY } = this.getScubaPosition();

            this.originX = scubaX;
            this.originY = scubaY;
          }
        }),
        concatMap((event) => {
          const { clientX: clickX, clientY: clickY } = event;
          return this.takeRotation$(clickX, clickY).pipe(
            switchMap(() => this.takeTranslaste$(clickX, clickY)),
          );
        }),
      )
      .subscribe((event) => {});
  }

  takeRotation$(clickX: number, clickY: number) {
    return new Observable<void>((observer) => {
      const scubaElement = this.scubaRef()?.nativeElement;
      const { scubaX, scubaY } = this.getScubaPosition();
      const diffX = clickX - scubaX;
      const diffY = clickY - scubaY;

      const angle = (Math.atan2(diffY, diffX) * 180) / Math.PI;
      let canlngle = Math.ceil(angle);

      console.log(canlngle);

      scubaElement.style.transform = `rotate(${canlngle + 90}deg)`;
      const timeoutIndex = setTimeout(() => {
        observer.next();
        observer.complete();
      }, 1000);
      return () => clearTimeout(timeoutIndex);
    });
  }

  private takeTranslaste$(clickX: number, clickY: number) {
    return new Observable<void>((observer) => {
      const scubaPositionElement = this.scubapositionRef()?.nativeElement;
      const { scubaX, scubaY } = this.getScubaPosition();

      const diffx = clickX - this.originX;
      const diffY = clickY - this.originY;

      scubaPositionElement.style.transform = `translate(${diffx}px,${diffY}px)`;
      const timeoutIndex = setTimeout(() => {
        observer.next();
        observer.complete();
      }, 1000);
      return () => clearTimeout(timeoutIndex);
    });
  }
  private getScubaPosition() {
    const scubaElement = this.scubaRef()?.nativeElement;
    const clientRect = scubaElement?.getBoundingClientRect();
    const scubaX = clientRect.x + clientRect.width / 2;
    const scubaY = clientRect.y + clientRect.height / 2;
    return { scubaX, scubaY, scubaElement };
  }
}
