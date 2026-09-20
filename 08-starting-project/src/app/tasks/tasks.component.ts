import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent
{
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName?: string;
  isAddingTask: boolean = false;

  private taskService: TasksService;

  //constructor(private taskService: TasksService)
  constructor(taskService: TasksService)
  {
    this.taskService = taskService;
  }
  
  get selectedUserTasks()
  {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask()
  {
    this.isAddingTask = true;
  }

  onCancelAddTask()
  {
    this.isAddingTask = false;
  }
}
