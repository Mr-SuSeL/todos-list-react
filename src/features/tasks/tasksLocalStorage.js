
const localStorageKey = "tasks";

export const saveTasksInLocalStorage = state => {

    localStorage.setItem(localStorageKey, JSON.stringify(state));
}

export const getTasksFromLocalStorage = () => {
    const serializedState = localStorage.getItem(localStorageKey);
    
    if (!serializedState) {
        return undefined; 
    }

    try {
        const parsedState = JSON.parse(serializedState);
        
        if (
            parsedState && 
            typeof parsedState === 'object' && 
            Array.isArray(parsedState.tasks)
        ) {
            return parsedState; 
        }

    } catch (error) {
        console.error("Błąd parsowania danych z localStorage:", error);
    }
    
    return undefined; 
}