import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload); 
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => { task.done = true; });
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            return {
                tasks: tasks.filter(task => task.id !== payload),
            };
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

export const { addTask, removeTask, toggleHideDone, 
    toggleTaskDone, setAllDone, fetchExampleTasks, 
    fetchExampleTasksSuccess, fetchExampleTasksError, 
    setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
export const selectTasks = state => state.tasks;
export const selectLoading = state => state.tasks.loading;
