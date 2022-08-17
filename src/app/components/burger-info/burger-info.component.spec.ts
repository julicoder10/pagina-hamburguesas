import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerInfoComponent } from './burger-info.component';

describe('BurgerInfoComponent', () => {
  let component: BurgerInfoComponent;
  let fixture: ComponentFixture<BurgerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
