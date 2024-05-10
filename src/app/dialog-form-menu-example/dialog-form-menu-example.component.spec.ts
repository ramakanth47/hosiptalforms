import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormMenuExampleComponent } from './dialog-form-menu-example.component';

describe('DialogFormMenuExampleComponent', () => {
  let component: DialogFormMenuExampleComponent;
  let fixture: ComponentFixture<DialogFormMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogFormMenuExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFormMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
