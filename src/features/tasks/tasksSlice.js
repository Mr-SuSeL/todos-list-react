import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {ide: 1,
            content: "Testwo czy redux zarzuca stanem",
            done: true,
        },
        ],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload); // immer library here allows us to mutate-like state directly
        },
        removeTask: ({ tasks }, { payload }) => {
            return {
                tasks: tasks.filter(task => task.id !== payload),
            };
        },
    },
}); 

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
export const selectTasks = state => state.tasks;

// console.log(addTask({
//     content: "Nauczys się Reduxa",
//     done: false,
//     id: 5
// }));

// console.log(tasksSlice.reducer({ tasks: [] }, addTask({
//     content: "Nauczys się Reduxa",
//     done: true,
//     id: 5
// })));
