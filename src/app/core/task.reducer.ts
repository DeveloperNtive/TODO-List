
import { createReducer, on } from '@ngrx/store';
import {
	getAllTaskList,
	getOneTaskList,
	addOneTask,
	updateOneTask,
	deleteOneTask,
	changeStateTask
} from './task.actions';

export interface Task {
	id: string;
	title: string;
	description: string;
	status: 'PENDING' | 'COMPLETED' | 'POSTPONED' | 'DELETED';
	due_date?: Date;
	created_by: string;
	created_at: Date;
	updated_at: Date;
}

export interface TaskState {
	tasks: Task[];
	selectedTask?: Task | null;
}

export const initialTaskState: TaskState = {
	tasks: [],
	selectedTask: null,
};

export const taskReducer = createReducer(
	initialTaskState,

	on(getAllTaskList, (state) => ({ ...state })),

	on(getOneTaskList, (state, { id }) => ({
		...state,
		selectedTask: state.tasks.find(t => t.id === id) || null
	})),

	on(addOneTask, (state, { task }) => ({
		...state,
		tasks: [...state.tasks, task]
	})),

	on(updateOneTask, (state, { task }) => ({
		...state,
		tasks: state.tasks.map(t => t.created_at === task.created_at ? { ...t, ...task } : t)
	})),

	on(deleteOneTask, (state, { id }) => ({
		...state,
		tasks: state.tasks.filter(t => t.id !== id)
	})),

	on(changeStateTask, (state, { task, status }) => ({
		...state,
		tasks: state.tasks.map(t =>
			t.id === task.id
				? { ...t, status: status }
				: t
		)
	}))
);



