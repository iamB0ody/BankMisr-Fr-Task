import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeGridComponent } from './exchange-grid.component';

describe('ExchangeGridComponent', () => {
  let component: ExchangeGridComponent;
  let fixture: ComponentFixture<ExchangeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
