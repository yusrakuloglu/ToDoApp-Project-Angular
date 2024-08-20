import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceBoardService {
  public boards: Array<any> = [];

  constructor() {
    if (this.isLocalStorageAvailable()) {
      let str = localStorage.getItem('board');
      if (str !== null) {
        this.boards = JSON.parse(str);
      }
    }
  }

  public createBoard(title: any) {
    let newBoardObj = {
      title: title,
      cards: [],
    };
    this.boards.push(newBoardObj);
    localStorage.setItem('board', JSON.stringify(this.boards));
  }

  public deleteBoard(boardIndex: number) {
    this.boards.splice(boardIndex, 1);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('board', JSON.stringify(this.boards));
    }
  }

  public updateDataLocaleStorage() {
    localStorage.setItem('board', JSON.stringify(this.boards));
  }
  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
