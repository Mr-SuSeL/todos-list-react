import { call, put, takeLatest, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

const selectTasksState = state => state.tasks;

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasksState = yield select(selectTasksState);
    yield call(saveTasksInLocalStorage, tasksState);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    
    yield takeLatest([
        'tasks/addTask', 
        'tasks/removeTask', 
        'tasks/toggleHideDone', 
        'tasks/toggleTaskDone', 
        'tasks/setAllDone',
        'tasks/fetchExampleTasksSuccess'
    ], saveTasksInLocalStorageHandler);
}