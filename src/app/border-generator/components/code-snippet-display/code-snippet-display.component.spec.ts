import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippetDisplayComponent } from './code-snippet-display.component';

describe('CodeSnippetDisplayComponent', () => {
  let component: CodeSnippetDisplayComponent;
  let fixture: ComponentFixture<CodeSnippetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSnippetDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeSnippetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
