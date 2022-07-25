import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5MostRentedHouseComponent } from './top5-most-rented-house.component';

describe('Top5MostRentedHouseComponent', () => {
  let component: Top5MostRentedHouseComponent;
  let fixture: ComponentFixture<Top5MostRentedHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5MostRentedHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5MostRentedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
