import { inject, Injectable } from '@angular/core';
import { TaskRepository } from '../../task/domain/task.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TaskResponseDTO } from './task-response.dto';

@Injectable({
  providedIn: 'root',
})
export class TaskHttpRepository implements TaskRepository {
  private readonly API = 'https://jsonplaceholder.typicode.com/todos';
  private readonly http: HttpClient = inject(HttpClient);
  getAll(): Observable<TaskResponseDTO[]> {
    return this.http.get<any[]>(this.API).pipe(
      map((tasks) => tasks.map((t) => ({
        id: String(t.id),
        title: t.title,
        description: '',
        status: t.completed ? 'COMPLETED' : 'PENDING',
        due_date: undefined,
        created_by: String(t.userId),
        created_at: new Date(),
        updated_at: new Date(),
      }) as TaskResponseDTO)
      )
    );
  }
  create(task: Task): Observable<void> {
    throw new Error('Method not implemented.');
  }
  update(task: Task): Observable<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
