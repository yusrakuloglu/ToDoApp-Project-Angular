import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsdialogComponent } from './boardsdialog.component';

describe('BoardsdialogComponent', () => {
  let component: BoardsdialogComponent;
  let fixture: ComponentFixture<BoardsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardsdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
