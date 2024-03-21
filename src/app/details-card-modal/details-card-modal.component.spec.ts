import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardModalComponent } from './details-card-modal.component';

describe('DetailsCardModalComponent', () => {
  let component: DetailsCardModalComponent;
  let fixture: ComponentFixture<DetailsCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCardModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
