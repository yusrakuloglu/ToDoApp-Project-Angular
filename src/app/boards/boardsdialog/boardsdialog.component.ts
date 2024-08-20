import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceBoardService } from '../../services/service-board.service';

@Component({
  selector: 'app-boardsdialog',
  templateUrl: './boardsdialog.component.html',
  styleUrl: './boardsdialog.component.css',
})
export class BoardsdialogComponent {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<BoardsdialogComponent>,
    private boardService: ServiceBoardService,
  ) {}

  close() {
    this.dialogRef.close();
  }

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value);
    this.dialogRef.close();
  }
}
