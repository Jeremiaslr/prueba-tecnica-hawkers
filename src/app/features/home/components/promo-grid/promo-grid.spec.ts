import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoGridComponent } from './promo-grid';

describe('PromoGrid', () => {
  let component: PromoGridComponent;
  let fixture: ComponentFixture<PromoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoGridComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
