import { useState, useEffect } from "react";
import { TasksContainerProps } from "./TasksContainer.interface";
import { TaskCard } from "../task-card/TaskCard";


import './TasksContainer.scss'

const TasksContainer: React.FC<TasksContainerProps> = ({label, color}) => {
  return (
    <div className="tasks-container">
      <div className="tasks-container__label" >{label}</div>
      <div className="tasks-container__bar" style={{
        background: color
      }} ></div>
      <div className="tasks-container__body" style={{
        background: color
      }} >
        <TaskCard />
      </div>
    </div>
  );
};

export default TasksContainer;
