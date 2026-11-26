import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointerAnimation } from './pointer-animation';

describe('PointerAnimation', () => {
  let component: PointerAnimation;
  let fixture: ComponentFixture<PointerAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointerAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(PointerAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
