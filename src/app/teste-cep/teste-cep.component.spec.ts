import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCepComponent } from './teste-cep.component';

describe('TesteCepComponent', () => {
  let component: TesteCepComponent;
  let fixture: ComponentFixture<TesteCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
