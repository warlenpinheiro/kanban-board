import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      {name: "Some random idea", progress: 25},
      {name: "This is another random idea", progress: 0},
      {name: "build an awesome application", progress: 15}
    ]),
    new Column('Research', [
      {name: "Lorem ipsum", progress: 12},
      {name: "foo", progress: 100},
      {name: "This was in the 'Research' column", progress: 55}
    ]),
    new Column('Todo', [
      {name: 'Get to work', progress: 50},
      {name: 'Pick up groceries', progress: 55},
      {name: 'Go home', progress: 44},
      {name: 'Fall asleep', progress: 22}
    ]),
    new Column('Done', [
      {name: 'Get up', progress: 100},
      {name: 'Brush teeth', progress: 100},
      {name: 'Take a shower', progress: 100},
      {name: 'Check e-mail', progress: 100},
      {name: 'Walk dog', progress: 100}
    ])
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
