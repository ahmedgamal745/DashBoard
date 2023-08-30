import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRightComponent } from './last-right.component';

describe('LastRightComponent', () => {
  let component: LastRightComponent;
  let fixture: ComponentFixture<LastRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastRightComponent]
    });
    fixture = TestBed.createComponent(LastRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
