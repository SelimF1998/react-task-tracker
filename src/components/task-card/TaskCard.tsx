import React from 'react';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import Avatar from '../avatar/Avatar';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import './TaskCard.scss';
import { DvrOutlined } from '@mui/icons-material';

export interface TaskProps {
    taskObject: Task;
 }

export interface Task {
  id: number;
  tag: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'On Approval' | 'Done';
  taskName: string;
  description: string;
  assignee: User;
  attachements: number;
  messages: number;        
}
export interface User {
  id: number;
  name: string;
  email: string;
  profileImg: string;
}

const TaskCard: React.FC<TaskProps> = ({taskObject}) => {
    const user = {
          id: 1,
          name: "Selim Ferroukhi",
          email: "selim.ferroukhi7@gmail.com",
          profileImg:
            "",
    }
    
  return (
    <div className="task-card" >
        <div className='task-card__header' >
            <div className='task-card__header__field' >
                <div className='task-card__header__field__icon' ><SpaceDashboardOutlinedIcon style={{ fontSize: "16px", color: "#4D38B2" }} /></div>
                <div className='task-card__header__field__label' > {taskObject.tag} </div>
            </div>
            <div className='task-card__header__status' >
                <div className='task-card__header__status__icon' ></div>
                <div className='task-card__header__status__label' > {taskObject.priority} </div>  
            </div>
        </div>

        <div className='task-card__title' > {taskObject.taskName} </div>

        <div className='task-card__description' > {taskObject.description}</div>

        <div className='task-card__bar' ></div>

        <div className='task-card__footer' >
            <div className='task-card__footer__left' >
                <div className='task-card__footer__left__avatar' ><Avatar user={taskObject.assignee} /></div>
            </div>
            <div className='task-card__footer__right' >
                <div className='task-card__footer__right__attachements' >
                    <div className='task-card__footer__right__attachements__icon' >< AttachFileOutlinedIcon style={{ fontSize: "16px", color: "#9090A1" }} /></div>
                    <div className='task-card__footer__right__attachements__value' >{taskObject.attachements}</div>
                </div>
                <div className='task-card__footer__right__messages' >
                    <div className='task-card__footer__right__messages__icon' ><ChatBubbleOutlineOutlinedIcon style={{ fontSize: "16px", color: "#9090A1" }} /> </div>
                    <div className='task-card__footer__right__messages__value' >{taskObject.messages}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskCard;
