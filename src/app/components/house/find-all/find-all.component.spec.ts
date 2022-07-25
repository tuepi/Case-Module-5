import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllComponent } from './find-all.component';

describe('FindAllComponent', () => {
  let component: FindAllComponent;
  let fixture: ComponentFixture<FindAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
