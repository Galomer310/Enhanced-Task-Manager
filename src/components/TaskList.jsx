import React, { useState } from "react";
import { useTaskContext } from "../Context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();
  const [taskText, setTaskText] = useState("");

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "all") return true;
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true;
  });

  const addTask = () => {
    if (taskText.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), text: taskText, completed: false },
      });
      setTaskText(""); // Clear input field after adding the task
    }
  };

  return (
    <div>
      {/* Add Task Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks to display.</p>
      )}
    </div>
  );
};

export default TaskList;
