
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

	on(addOneTask, (state, action) => ({
		...state,
		tasks: [...state.tasks, action.tasks]
	})),

	on(updateOneTask, (state, action) => ({
		...state,
		tasks: state.tasks.map(t => t.created_at === action.task.created_at ? { ...t, ...action.task } : t)
	})),

	on(deleteOneTask, (state, action) => ({
		...state,
		tasks: state.tasks.filter(t => t.created_by !== action.created_by)
	})),

	on(changeStateTask, (state, action) => ({
		...state,
		tasks: state.tasks.map(t =>
			t.created_at === action.task.created_at
				? { ...t, status: action.status }
				: t
		)
	}))
);



