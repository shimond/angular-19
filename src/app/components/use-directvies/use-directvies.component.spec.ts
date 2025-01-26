import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDirectviesComponent } from './use-directvies.component';

describe('UseDirectviesComponent', () => {
  let component: UseDirectviesComponent;
  let fixture: ComponentFixture<UseDirectviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseDirectviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseDirectviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
