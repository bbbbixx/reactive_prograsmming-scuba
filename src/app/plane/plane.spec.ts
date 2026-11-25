import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plane } from './plane';

describe('Plane', () => {
  let component: Plane;
  let fixture: ComponentFixture<Plane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plane],
    }).compileComponents();

    fixture = TestBed.createComponent(Plane);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
