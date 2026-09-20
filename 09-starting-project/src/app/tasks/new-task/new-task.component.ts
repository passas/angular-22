import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent
{
  @Input({required: true}) userId!: string;
  
  @Output() cancel = new EventEmitter<void>();
  
  enteredTitle = signal<string>('');
  enteredSummary = '';
  enteredDate = '';

  private taskService: TasksService = inject(TasksService);

  onCancel()
  {
    this.cancel.emit();
  }

  onSubmit()
  {
    this.taskService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: '',
      id: ''
    }, this.userId);
  }
}
