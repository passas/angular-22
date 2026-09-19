import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask()
  {
    this.completeTask.emit(this.task.id);
  }
}
