const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks => {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}

export const getTasksFromLocalStorage = () => {
    const serializedState = localStorage.getItem(localStorageKey);

    if (!serializedState) {
        return [];
    }

    try {
        const parsedState = JSON.parse(serializedState);

        if (Array.isArray(parsedState)) {
            return parsedState;
        }

    } catch (error) {
        console.error("Błąd parsowania danych z localStorage:", error);
    }
    return []; 
}