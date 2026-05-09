import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  myTasks: any[] = [];
  currentSort: string = 'id-desc';
  isModalOpen: boolean = false;
  statusMessage: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.refresh();
  }

  toggle(task: any) {

    this.taskService.toggleTask(task).subscribe({
      next: () => {
        this.refresh();
        this.showToast('Task updated successfully!');
      },
      error: (err) => console.error('Failed to toggle task', err)
    });
  }

  delete(id: number | string) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          this.refresh();
          this.showToast('Task deleted successfully!');
        },
        error: (err) => console.error('Failed to delete task', err)
      });
    }
  }

  refresh() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        if (this.currentSort === 'id-desc') {
          this.myTasks = tasks.sort((a, b) => Number(b.id) - Number(a.id));
        } else if (this.currentSort === 'id-asc') {
          this.myTasks = tasks.sort((a, b) => Number(a.id) - Number(b.id));
        } else if (this.currentSort === 'priority') {
          const p: any = { 'High': 3, 'Medium': 2, 'Low': 1 };
          this.myTasks = tasks.sort((a, b) => p[b.priority] - p[a.priority]);
        } else {
          this.myTasks = tasks;
        }
      },
      error: (err) => console.error('Failed to load tasks', err)
    });
  }

  onSortChange(event: any) {
    this.currentSort = event.target.value;
    this.refresh();
  }

  showToast(message: string) {
    this.statusMessage = message;
    setTimeout(() => {
      this.statusMessage = '';
    }, 3000);
  }

  addNewTask(title: string, priority: string, dateValue: string) {
    if (title.trim()) {
      let formattedDate = '';

      if (dateValue) {

        const [year, month, day] = dateValue.split('-');

        formattedDate = `${day}/${month}/${year.slice(-2)}`;
      } else {

        formattedDate = 'No Date';
      }

      const newTask = {
        title: title,
        priority: priority,
        dueDate: formattedDate
      };

      this.taskService.addTask(newTask).subscribe({
        next: () => {
          this.refresh();
          this.isModalOpen = false;
          this.showToast('Task added successfully!');
        },
        error: (err) => console.error('Failed to add task', err)
      });
    }
  }
}