import { BoardHeader } from "../../components/board-header/BoardHeader";
import TasksContainer from "../../components/tasks-container/TasksContainer";
import AddTaskFormDialog from "../../components/tasks-forms/AddTaskFormDialog";
import { useTaskStore } from "../../store/taskStore";
import "./Board.scss";

const Board = () => {
  const {
    todoTasks,
    inProgressTasks,
    onApprovalTasks,
    doneTasks,
  } = useTaskStore();
  
  return (
    <div className="board">
      <BoardHeader />

      <AddTaskFormDialog 
      />
      {/* <TaskCard /> */}
      <div className="board__tasks-container">
        <div className="board__tasks-container__body">
          <TasksContainer
            tasks={todoTasks}
            label="Todo"
            color="#FDF8EA"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            tasks={inProgressTasks}
            label="In Progress"
            color="#F0F0FF"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            tasks={onApprovalTasks}
            label="On Approval"
            color="#E6FEEB"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            tasks={doneTasks}
            label="Done"
            color="#FBEEF6"
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
