import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsdialogComponent } from './boardsdialog/boardsdialog.component';
import { ServiceBoardService } from '../services/service-board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css',
})
export class BoardsComponent {
  filterText: string = '';
  filteredBoards: Array<any> = [];

  constructor(
    private matDialog: MatDialog,
    public boardService: ServiceBoardService,
  ) {
    this.filteredBoards = this.boardService.boards;
  }
  openNewBoard() {
    const dialogRef = this.matDialog.open(BoardsdialogComponent, {
      maxHeight: '270px',
      width: '600px',
    });
  }
  deleteBoard(index: number, event: Event) {
    event.stopPropagation();
    this.boardService.deleteBoard(index);
  }
  filteredBoard(event: any) {
    const filterText = event.target.value.trim().toLowerCase();
    this.filteredBoards = this.boardService.boards.filter((board) =>
      board.title.toLowerCase().includes(filterText),
    );
  }
}
