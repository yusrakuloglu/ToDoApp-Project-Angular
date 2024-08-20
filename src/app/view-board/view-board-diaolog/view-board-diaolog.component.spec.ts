import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoardDiaologComponent } from './view-board-diaolog.component';

describe('ViewBoardDiaologComponent', () => {
  let component: ViewBoardDiaologComponent;
  let fixture: ComponentFixture<ViewBoardDiaologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBoardDiaologComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBoardDiaologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
