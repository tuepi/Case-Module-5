import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByOwnerIdComponent } from './find-by-owner-id.component';

describe('FindByOwnerIdComponent', () => {
  let component: FindByOwnerIdComponent;
  let fixture: ComponentFixture<FindByOwnerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByOwnerIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByOwnerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
