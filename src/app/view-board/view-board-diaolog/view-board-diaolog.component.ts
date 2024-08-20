import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceBoardService } from '../../services/service-board.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-board-diaolog',
  templateUrl: './view-board-diaolog.component.html',
  styleUrl: './view-board-diaolog.component.css',
})
export class ViewBoardDiaologComponent implements OnInit {
  title: string = '';
  tasks: Array<string> = [''];
  tasksLoop: any = [false];

  constructor(
    private dialogRef: MatDialogRef<ViewBoardDiaologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public boardService: ServiceBoardService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    if (this.data.editMode) {
      this.title =
        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].title;
      this.tasks =
        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].checkList;
      this.tasksLoop =
        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].status;
    }
  }

  addNewTask() {
    this.tasks.push('');
    this.tasksLoop.push(false);
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.tasksLoop.splice(i, 1);
    this.boardService.updateDataLocaleStorage;
  }

  close() {
    this.dialogRef.close();
  }
  create() {
    if (this.tasks.some((el: string) => el === '')) {
      this.snackBar.open('Enter a new task', 'OK');
    } else {
      if (!this.data.editMode) {
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checkList: this.tasks,
          status: this.tasksLoop,
        });
      } else {
        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].title = this.title;

        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].checkList = this.tasks;

        this.boardService.boards[this.data.boardIndex].cards[
          this.data.cardIndex
        ].status = this.tasksLoop;
      }

      this.boardService.updateDataLocaleStorage();
      this.close();
    }
  }
}
