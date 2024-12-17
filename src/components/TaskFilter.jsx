import React from "react";
import { useTaskContext } from "../Context/TaskContext";

const TaskFilter = () => {
  const { dispatch } = useTaskContext();

  const setFilter = (filter) => {
    dispatch({ type: "FILTER_TASKS", payload: filter });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setFilter("all")} style={{ marginRight: "10px" }}>
        Show All
      </button>
      <button onClick={() => setFilter("active")} style={{ marginRight: "10px" }}>
        Show Active
      </button>
      <button onClick={() => setFilter("completed")}>
        Show Completed
      </button>
    </div>
  );
};

export default TaskFilter;
