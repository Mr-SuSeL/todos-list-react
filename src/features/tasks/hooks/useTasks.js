import { useEffect, useState } from "react";

const getTasks = () => {
  const tasksLocalStorage = localStorage.getItem("tasks");
  return tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((task) =>
      task.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    const newTask = {
      content,
      done: false,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    };

    setTasks((tasks) => [...tasks, newTask]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
