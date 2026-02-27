import { createAction, props } from "@ngrx/store";
import { Task } from "./task.reducer";

export const getAllTaskList = createAction('[Task List] Get All Task List');
export const getOneTaskList = createAction('[Task List] Get One Task List', props<{ id: string }>());
export const addOneTask = createAction('[Task List] Add One Task', props<{ task: Task }>());
export const updateOneTask = createAction('[Task List] Update One Task', props<{ task: Task }>());
export const deleteOneTask = createAction('[Task List] Delete One Task', props<{ id: string }>());
export const changeStateTask = createAction('[Task List] Change State One Task', props<{ task: Task, status: 'PENDING' | 'COMPLETED' | 'POSTPONED' | 'DELETED'}>());