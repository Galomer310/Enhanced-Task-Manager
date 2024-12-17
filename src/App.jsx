import React from "react";
import { TaskProvider } from "./Context/TaskContext";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./App.css"

const App = () => {
  return (
    <TaskProvider>
      <div className="main">
        <h1>Task Manager</h1>
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
