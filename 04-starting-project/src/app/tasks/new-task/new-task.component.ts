import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent
{
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();
  
  //enteredTitle = '';
  enteredTitle = signal<string>('');
  enteredSummary = '';
  enteredDate = '';

  onCancel()
  {
    this.cancel.emit();
  }

  onSubmit()
  {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: '',
      id: ''
    });
  }
}
