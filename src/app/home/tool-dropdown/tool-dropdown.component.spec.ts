import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDropdownComponent } from './tool-dropdown.component';

describe('ToolDropdownComponent', () => {
  let component: ToolDropdownComponent;
  let fixture: ComponentFixture<ToolDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
