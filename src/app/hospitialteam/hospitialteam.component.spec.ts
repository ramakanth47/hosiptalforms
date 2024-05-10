import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitialteamComponent } from './hospitialteam.component';

describe('HospitialteamComponent', () => {
  let component: HospitialteamComponent;
  let fixture: ComponentFixture<HospitialteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitialteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitialteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
