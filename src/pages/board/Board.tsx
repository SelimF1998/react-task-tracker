import React, { useState } from "react";
import { BoardHeader } from "../../components/board-header/BoardHeader";
import TasksContainer from "../../components/tasks-container/TasksContainer";
import AddTaskFormDialog from "../../components/tasks-forms/AddTaskFormDialog";
import { Task } from "../../components/task-card/TaskCard";
import "./Board.scss";

const Board = () => {
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);
  const [editClicked, setEditClicked] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task>({
    id: 0,
    tag: "",
    priority: "Low", // or any default value from your union
    status: "Todo", // default status
    taskName: "",
    description: "",
    assignee: {
      id: 0,
      name: "",
      email: "",
      profileImg: "",
    },
    attachements: 0,
    messages: 0,
  });

  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [onApprovalTasks, setOnApprovalTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  // const todoTasks = [
  //   {
  //     id: 101,
  //     tag: "Frontend",
  //     priority: "High" as const,
  //     status: "Todo" as const,
  //     taskName: "Create login page",
  //     description: "Design and implement the login page with validations.",
  //     assignee: {
  //       id: 1,
  //       name: "Selim Ferroukhi",
  //       email: "selim.ferroukhi7@gmail.com",
  //       profileImg: ""
  //     },
  //     attachements: 2,
  //     messages: 5,
  //   },
  //   {
  //     id: 102,
  //     tag: "Backend",
  //     priority: "Medium" as const,
  //     status: "Todo" as const,
  //     taskName: "Setup authentication API",
  //     description: "Develop the API endpoints for user authentication.",
  //     assignee: {
  //       id: 2,
  //       name: "Jane Doe",
  //       email: "jane.doe@example.com",
  //       profileImg: ""
  //     },
  //     attachements: 1,
  //     messages: 3,
  //   }
  // ];

  const openDialog = () => setIsAddTaskDialogOpen(true);
  const closeDialog = () => setIsAddTaskDialogOpen(false);

  const handleEditTask = (task: Task) => {
    console.log("Task Clicked:", task);
    openDialog();
    setEditClicked(true);
    setEditingTask(task);

    setIsAddTaskDialogOpen(true);
  };

  const handleDeleteTask = (taskToDelete: Task) => {
    console.log("Task clicked:", taskToDelete);

    setTodoTasks((prev) => prev.filter((task) => task.id !== taskToDelete.id));
    setInProgressTasks((prev) =>
      prev.filter((task) => task.id !== taskToDelete.id)
    );
    setOnApprovalTasks((prev) =>
      prev.filter((task) => task.id !== taskToDelete.id)
    );
    setDoneTasks((prev) => prev.filter((task) => task.id !== taskToDelete.id));
  };

  const handleTaskSubmit = (taskData: any) => {
    if (editClicked) {
      // We're editing an existing task
      const updatedTask: Task = {
        ...editingTask,
        tag: taskData.tag,
        priority: taskData.priority!,
        status: taskData.status!,
        taskName: taskData.title!,
        description: taskData.description!,
        assignee: {
          id: taskData.assignee?.id || 0,
          name: taskData.assignee?.name || "",
          email: taskData.assignee?.email || "",
          profileImg: taskData.assignee?.profileImg || "",
        },
        attachements: taskData.attachements || 2,
        messages: taskData.messages || 3,
      };

      // Remove the old task from its old list
      const removeOldTask = (tasks: Task[]) =>
        tasks.filter((task) => task.id !== updatedTask.id);

      setTodoTasks((prev) => removeOldTask(prev));
      setInProgressTasks((prev) => removeOldTask(prev));
      setOnApprovalTasks((prev) => removeOldTask(prev));
      setDoneTasks((prev) => removeOldTask(prev));

      // Add the updated task to the right list according to its status
      switch (updatedTask.status) {
        case "Todo":
          setTodoTasks((prev) => [...prev, updatedTask]);
          break;
        case "In Progress":
          setInProgressTasks((prev) => [...prev, updatedTask]);
          break;
        case "On Approval":
          setOnApprovalTasks((prev) => [...prev, updatedTask]);
          break;
        case "Done":
          setDoneTasks((prev) => [...prev, updatedTask]);
          break;
      }

      setEditClicked(false);
      setEditingTask({
        id: 0,
        tag: "",
        priority: "Low",
        status: "Todo",
        taskName: "",
        description: "",
        assignee: {
          id: 0,
          name: "",
          email: "",
          profileImg: "",
        },
        attachements: 0,
        messages: 0,
      });
    } else {
      // Creating a new task, your existing code
      const taskObject: Task = {
        id: Math.floor(Math.random() * 1000),
        tag: taskData.tag!,
        priority: taskData.priority!,
        status: taskData.status!,
        taskName: taskData.title!,
        description: taskData.description!,
        assignee: {
          id: Date.now(),
          name: taskData.assignee?.name || "",
          email: taskData.assignee?.email || "",
          profileImg: taskData.assignee?.profileImg || "",
        },
        attachements: taskData.attachements || 2,
        messages: taskData.messages || 3,
      };

      switch (taskObject.status) {
        case "Todo":
          setTodoTasks((prev) => [...prev, taskObject]);
          break;
        case "In Progress":
          setInProgressTasks((prev) => [...prev, taskObject]);
          break;
        case "On Approval":
          setOnApprovalTasks((prev) => [...prev, taskObject]);
          break;
        case "Done":
          setDoneTasks((prev) => [...prev, taskObject]);
          break;
      }
    }

    setIsAddTaskDialogOpen(false);
  };

  return (
    <div className="board">
      <BoardHeader onAddClick={openDialog} />

      <AddTaskFormDialog
        editClicked={editClicked}
        editingTask={editingTask}
        isOpen={isAddTaskDialogOpen}
        onClose={closeDialog}
        onSubmit={handleTaskSubmit}
      />
      {/* <TaskCard /> */}
      <div className="board__tasks-container">
        <div className="board__tasks-container__body">
          <TasksContainer
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            tasks={todoTasks}
            label="Todo"
            color="#FDF8EA"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            tasks={inProgressTasks}
            label="In Progress"
            color="#F0F0FF"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            tasks={onApprovalTasks}
            label="On Approval"
            color="#E6FEEB"
          />
        </div>
        <div className="board__tasks-container__body">
          <TasksContainer
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
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
