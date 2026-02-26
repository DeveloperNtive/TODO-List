import { Routes } from '@angular/router';
import { LayoutComponent } from './features/pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'task-list',
        loadComponent: () => import('./features/pages/task-list/task-list.component').then((m) => m.TaskListComponent),
      },
      {
        path: 'task-detail/:id',
        loadComponent: () => import('./features/pages/task-details/task-details.component').then((m) => m.TaskDetailsComponent),
      },
      {
        path: 'task-delete/:id',
        loadComponent: () => import('./features/pages/task-delete/task-delete.component').then((m) => m.TaskDeleteComponent),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'tasks-list',
  },
];
