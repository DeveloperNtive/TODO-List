import { inject, Injectable } from '@angular/core';
import { LoadTasksUseCase } from '../../application/usecases/loadTasks.usecases';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetTaskList {
  private readonly useCase: LoadTasksUseCase = inject(LoadTasksUseCase);
  private readonly http: HttpClient = inject(HttpClient);

  execute() {
    return this.useCase.execute();
  }
}
