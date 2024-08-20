import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBoardService } from '../services/service-board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDiaologComponent } from './view-board-diaolog/view-board-diaolog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrl: './view-board.component.css',
})
export class ViewBoardComponent implements OnInit {
  boardIndex: any = 0;
  boardTitle: string = '';
  constructor(
    private route: ActivatedRoute,
    public boardService: ServiceBoardService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.boardIndex = Number(this.route.snapshot.paramMap.get('boardIndex'));
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  }

  openNewCard() {
    const dialogRef = this.matDialog.open(ViewBoardDiaologComponent, {
      width: '600px',
      data: { boardIndex: this.boardIndex, editMode: false },
    });
  }
  deleteCard(indexCard: number) {
    this.boardService.boards[this.boardIndex].cards.splice(indexCard, 1);
    this.boardService.updateDataLocaleStorage();
  }
  editCard(indexCard: number, card: any) {
    const dialogRef = this.matDialog.open(ViewBoardDiaologComponent, {
      width: '600px',
      data: {
        boardIndex: this.boardIndex,
        cardIndex: indexCard,
        editMode: true,
      },
    });
  }
}
