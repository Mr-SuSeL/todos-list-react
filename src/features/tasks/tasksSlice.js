import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload); // immer library here allows us to mutate-like state directly
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
    },
}); 

export const { addTask, removeTask, toggleHideDone, toggleTaskDone, setAllDone } = tasksSlice.actions;
export default tasksSlice.reducer;
export const selectTasks = state => state.tasks;

