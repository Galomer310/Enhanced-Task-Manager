import React, { useRef } from "react";
import { useTaskContext } from "../Context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useTaskContext();
  const inputRef = useRef(null);

  const toggleTask = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const editTask = () => {
    const newText = inputRef.current.value;
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: newText } });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        defaultValue={task.text}
        ref={inputRef}
        onBlur={editTask}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      />
    </div>
  );
};

export default TaskItem;
