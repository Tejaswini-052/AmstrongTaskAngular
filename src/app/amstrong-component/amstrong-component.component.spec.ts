import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmstrongComponentComponent } from './amstrong-component.component';

describe('AmstrongComponentComponent', () => {
  let component: AmstrongComponentComponent;
  let fixture: ComponentFixture<AmstrongComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmstrongComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmstrongComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
