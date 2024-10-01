import React from 'react'
import { BoardHeader } from '../../components/board-header/BoardHeader';
import TasksContainer from '../../components/tasks-container/TasksContainer';
import { TaskCard } from '../../components/task-card/TaskCard';


import './Board.scss'


const Board = () => {
  return (
    <div className='board' >
      <BoardHeader />
      {/* <TaskCard /> */}
      <div className='board__tasks-container' >
        <div className='board__tasks-container__body' >
          <TasksContainer label="Todo" color="#FDF8EA" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer label="In Progress" color="#F0F0FF" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer label="On Approval" color="#E6FEEB" />
        </div>
        <div className='board__tasks-container__body' >
          <TasksContainer label="Done" color="#FBEEF6" />
        </div>
      </div>
    </div>
  )
}

export default Board