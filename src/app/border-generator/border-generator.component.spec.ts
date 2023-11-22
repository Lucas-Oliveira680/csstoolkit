import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderGeneratorComponent } from './border-generator.component';

describe('BorderGeneratorComponent', () => {
  let component: BorderGeneratorComponent;
  let fixture: ComponentFixture<BorderGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
