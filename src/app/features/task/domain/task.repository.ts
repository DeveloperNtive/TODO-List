import { Observable } from "rxjs";
import { TaskResponseDTO } from "../../infrastructure/http/task-response.dto";

export interface TaskRepository {
    getAll(): Observable<TaskResponseDTO[]>;
    create(task: Task): Observable<void>;
    update(task: Task): Observable<void>;
    delete(id: string): Observable<void>;
}