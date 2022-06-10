import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsDetailComponent } from './layouts-detail.component';

describe('LayoutsDetailComponent', () => {
  let component: LayoutsDetailComponent;
  let fixture: ComponentFixture<LayoutsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
