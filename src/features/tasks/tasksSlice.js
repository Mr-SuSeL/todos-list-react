
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
        setTasks: (state, {payload: tasks}) => {
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

export default tasksSlice.reducer;
export const selectTasks = state => state.tasks;
export const selectLoading = state => state.tasks.loading;