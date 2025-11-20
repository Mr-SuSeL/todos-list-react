import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const defaultInitialState = {
    tasks: [],
    hideDone: false,
    loading: false,
};

const savedState = getTasksFromLocalStorage();

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        ...defaultInitialState,
        ...(savedState),
    },

    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: state => {
            state.tasks.forEach(task => { task.done = true; });
        },
        toggleTaskDone: (state, { payload }) => {
            const index = state.tasks.findIndex(task => task.id === payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        fetchExampleTasks: state => {
            state.loading = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: state => {
            state.loading = false;
        },
    },
});

export const {
    addTask, removeTask, toggleHideDone, toggleTaskDone, setAllDone,
    fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError, setTasks
} = tasksSlice.actions;


const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state)?.tasks ?? [];
export const selectHideDone = state => selectTasksState(state)?.hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state =>
    selectTasks(state).every(({ done }) => done);

export const selectLoading = state => selectTasksState(state)?.loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;