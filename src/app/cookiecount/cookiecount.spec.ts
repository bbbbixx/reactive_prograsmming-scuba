import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cookiecount } from './cookiecount';

describe('Cookiecount', () => {
  let component: Cookiecount;
  let fixture: ComponentFixture<Cookiecount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cookiecount],
    }).compileComponents();

    fixture = TestBed.createComponent(Cookiecount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
