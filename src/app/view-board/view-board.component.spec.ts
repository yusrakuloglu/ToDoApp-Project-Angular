import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoardComponent } from './view-board.component';

describe('ViewBoardComponent', () => {
  let component: ViewBoardComponent;
  let fixture: ComponentFixture<ViewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
