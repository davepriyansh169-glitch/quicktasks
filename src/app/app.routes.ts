import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'dashboard', component: DashboardComponent }
];
