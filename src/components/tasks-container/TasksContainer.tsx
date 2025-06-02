import { TasksContainerProps } from "./TasksContainer.interface";
import TaskCard from "../task-card/TaskCard";
import './TasksContainer.scss'
import { useEffect } from "react";

const TasksContainer: React.FC<TasksContainerProps> = ({label, color, tasks}) => {
  const shouldColorBackground = tasks && tasks.length > 0;

  useEffect(() => {
    console.log("Tasks:", tasks);
    console.log("color bg:", shouldColorBackground);
  }, [tasks])
  
  return (
    <div className="tasks-container">
      <div className="tasks-container__label" >{label}</div>
      <div className="tasks-container__bar" style={{
        background: color
      }} ></div>
      <div className="tasks-container__body" style={{ background: shouldColorBackground ? color : 'transparent' }} >
        {tasks?.map(task => (
          <TaskCard key={task.id} taskObject={task} />
        ))} 
      </div>
    </div>
  );
};

export default TasksContainer;
