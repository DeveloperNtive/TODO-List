import { inject } from "@angular/core";
import { TaskRepository } from "../../task/domain/task.repository";
import { TaskHttpRepository } from "../../infrastructure/http/task-http-repository";

export class LoadTasksUseCase {
    
    private readonly repo: TaskRepository = inject(TaskHttpRepository)

    execute() {
        return this.repo.getAll();
    }
}