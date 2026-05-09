import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(newTask: any): Observable<any> {

    const taskToAdd = {
      ...newTask,
      id: Date.now().toString(),
      completed: false
    };
    return this.http.post<any>(this.apiUrl, taskToAdd);
  }

  deleteTask(id: string | number): Observable<any> {
    
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  toggleTask(task: any): Observable<any> {
    
    const updatedTask = { ...task, completed: !task.completed };
    
    return this.http.put(`${this.apiUrl}/${task.id}`, updatedTask);
  }
}