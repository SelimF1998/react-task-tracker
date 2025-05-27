import React, {useState} from 'react'
import { BoardHeader } from '../../components/board-header/BoardHeader';
import TasksContainer from '../../components/tasks-container/TasksContainer';
import AddTaskFormDialog from '../../components/tasks-forms/AddTaskFormDialog';
import { Task } from '../../components/task-card/TaskCard';
import './Board.scss'


const Board = () => {
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);

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

  const openDialog = () => setIsAddTaskDialogOpen(true)
  const closeDialog = () => setIsAddTaskDialogOpen(false);

  const handleTaskSubmit = (taskData: any) => {
    const taskObject: Task = {
      id: Math.floor(Math.random() * 1000), // Or use a proper UUID
      tag: taskData.tag,
      priority: taskData.priority,
      status: taskData.status,
      taskName: taskData.title,
      description: taskData.description,
      assignee: {
        id: Date.now(),
        name: taskData.assignee.name,
        email: taskData.assignee.email,
        profileImg: taskData.assignee.profileImg
      },
      attachements: taskData.attachements || 2,
      messages: taskData.messages || 3
    };

    console.log("Task Object:", taskObject);

    switch (taskObject.status) {
      case 'Todo':
        setTodoTasks(prev => [...prev, taskObject]);
        break;
      case 'In Progress':
        console.log("")
        setInProgressTasks(prev => [...prev, taskObject]);
        break;
      case 'On Approval':
        setOnApprovalTasks(prev => [...prev, taskObject]);
        break;
      case 'Done':
        setDoneTasks(prev => [...prev, taskObject]);
        break;
    }
    
    setIsAddTaskDialogOpen(false);
  };

  return (
    <div className='board' >
      <BoardHeader onAddClick={openDialog} />

      <AddTaskFormDialog isOpen={isAddTaskDialogOpen} onClose={closeDialog} onSubmit={handleTaskSubmit} />
      {/* <TaskCard /> */}
      <div className='board__tasks-container' >
        <div className='board__tasks-container__body' >
          <TasksContainer tasks={todoTasks} label="Todo" color="#FDF8EA" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer tasks={inProgressTasks} label="In Progress" color="#F0F0FF" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer tasks={onApprovalTasks} label="On Approval" color="#E6FEEB" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer tasks={doneTasks} label="Done" color="#FBEEF6" />
        </div>
      </div>
    </div>
  )
}

export default Board;